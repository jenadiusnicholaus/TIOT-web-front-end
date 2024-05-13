// import axios from "axios";

// const token = JSON.parse(sessionStorage.getItem("access"));
// axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   function (error) {
//     //  navigate to login using router
//     this;

//     return Promise.reject(error);
//   }
// );

import axios from "axios";

async function refreshToken() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const refreshToken = JSON.parse(sessionStorage.getItem("refresh")) ?? null;

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

axios.interceptors.response.use(undefined, async (error) => {
  if (error.config && error.response && error.response.status === 401) {
    // Refresh token code goes here
    // For example, you might have a refreshTokens function that refreshes the tokens
    // and updates the sessionStorage with the new tokens

    await refreshToken();

    // After refreshing the tokens, get the new token from sessionStorage
    const newToken = JSON.parse(sessionStorage.getItem("access"));

    // Update the Authorization header with the new token
    error.config.headers["Authorization"] = `Bearer ${newToken}`;

    // Retry the original request
    return axios.request(error.config);
  }

  // If the error is not a 401 or there's no config, reject the promise with the error
  return Promise.reject(error);
});
axios.interceptors.response.use(undefined, async (error) => {
  if (error.config && error.response && error.response.status === 401) {
    // Check if the config does not have a `retryCount` property, if not, then set it to zero
    if (!error.config.retryCount) {
      error.config.retryCount = 0;
    }

    // Check if we've already retried the maximum amount of times
    if (error.config.retryCount >= 3) {
      // Reject with the error
      return Promise.reject(error);
    }

    // Increase the retry count
    error.config.retryCount++;

    // Refresh token code goes here
    await refreshToken();

    // After refreshing the tokens, get the new token from sessionStorage
    const newToken = JSON.parse(sessionStorage.getItem("access"));

    // Update the Authorization header with the new token
    error.config.headers["Authorization"] = `Bearer ${newToken}`;

    // Retry the original request
    return axios.request(error.config);
  }

  // If the error is not a 401 or there's no config, reject the promise with the error
  return Promise.reject(error);
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = JSON.parse(sessionStorage.getItem("access"));
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    //  navigate to login using router
    this.$router.push("/sessions/signIn");
    return Promise.reject(error);
  }
);
