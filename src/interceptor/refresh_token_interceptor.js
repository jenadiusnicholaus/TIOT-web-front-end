import axios from "axios";

// Function that will be called to refresh the token
async function refreshToken() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const refreshToken = JSON.parse(sessionStorage.getItem("userInfo"))?.refresh;

  const raw = JSON.stringify({
    refresh: refreshToken != null ? refreshToken : null,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      process.env.VUE_APP_BASE_URL + process.env.VUE_APP_REFRESH_TOKEN_URL,
      requestOptions
    );
    const result = await response.json();
    sessionStorage.setItem(
      "userInfo",
      JSON.stringify({ access: result.access })
    );
    return result.access;
  } catch (error) {
    console.error(error);
  }
}

axios.interceptors.response.use(
  function (response) {
    // If the request succeeds, we don't have to do anything and just return the response
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // If the server responds with a 400 or 401 error, try to refresh the token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + newToken;
      return axios(originalRequest);
    }

    // If the error is due to other reasons, we just throw it back to axios
    return Promise.reject(error);
  }
);
