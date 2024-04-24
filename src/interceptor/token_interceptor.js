import axios from "axios";

const token = JSON.parse(sessionStorage.getItem("userInfo"))?.access;
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    //  navigate to login using router
    this.$router.push("/sessions/signIn");

    return Promise.reject(error);
  }
);
