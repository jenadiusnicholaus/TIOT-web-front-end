import axios from "axios";
export default {
  state: {
    loggedInUser:
      sessionStorage.getItem("userInfo") != null
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : null,
    loading: false,
    singUploading: false,
    signUpuser:
      sessionStorage.getItem("registeredUser") != null
        ? JSON.parse(sessionStorage.getItem("registeredUser"))
        : null,

    error: null,
  },
  getters: {
    loggedInUser: (state) => state.loggedInUser,
    loading: (state) => state.loading,
    error: (state) => state.error,
    signUpuser: (state) => state.signUpuser,
  },
  mutations: {
    setUser(state, data) {
      state.loggedInUser = data;
      state.loading = false;
      state.error = null;
    },
    setSignUpUser(state, data) {
      state.signUpuser = data;
      state.singUploading = false;
      state.error = null;
    },
    setLogout(state) {
      state.loggedInUser = null;
      state.loading = false;
      state.error = null;
      // this.$router.go("/");
    },
    setLoading(state, data) {
      state.loading = data;
      state.error = null;
    },
    setSignUpLoading(state, data) {
      state.singUploading = data;
      state.error = null;
    },
    setError(state, data) {
      state.error = data;
      state.loggedInUser = null;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    login({ commit, dispatch }, data) {
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("userprofile");
      commit("clearError");
      commit("setLoading", true);
      let urls = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_LOGIN_URL;
      console.log(urls);
      fetch(urls, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            dispatch("getUserProfile");

            return response.json();
          } else {
            throw new Error("Invalid email or password");
          }
        })
        .then((data) => {
          commit("setUser", data);
          commit("setLoading", false);
          sessionStorage.setItem("userInfo", JSON.stringify(data));
        })
        .catch((error) => {
          commit("setError", error.message);
        });
    },

    async signUserUp({ commit }, data) {
      commit("clearError");
      commit("setSignUpLoading", true);
      let urls = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_SIGNUP_URL;
      try {
        return await fetch(urls, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error(error);
      }
    },
    async activateAccount({ commit }, data) {
      commit("clearError");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        otp: data.otp,
        email: data.email,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      return await fetch(
        process.env.VUE_APP_BASE_URL + process.env.VUE_APP_ACTIVATE_ACCOUNT_URL,
        requestOptions
      );
    },

    async getUserProfile() {
      try {
        const response = await axios.get(
          process.env.VUE_APP_BASE_URL + process.env.VUE_APP_USER_PROFILE_URL
        );
        if (response.status === 200) {
          this.profile = response.data;
          const data = response.data;
          sessionStorage.setItem("userprofile", JSON.stringify(data));
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async forgotPassword({ commit }, data) {
      commit("clearError");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: data.email,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        return await fetch(
          process.env.VUE_APP_BASE_URL +
            process.env.VUE_APP_FORGOT_PASSWORD_URL,
          requestOptions
        );
      } catch (error) {
        console.error(error);
        throw new Error(`Error ${error}`);
      }
    },

    async resetPassword({ commit }, data) {
      commit("clearError");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      console.log(data);

      const raw = JSON.stringify({
        token: data.token,
        new_password: data.new_password,
        confirm_password: data.confirm_password,
        email: data.email,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        return await fetch(
          process.env.VUE_APP_BASE_URL + process.env.VUE_APP_RESET_PASSWORD_URL,
          requestOptions
        );
      } catch (error) {
        throw new Error(`Error ${error}`);
      }
    },

    async changePassword({ commit }, rdata) {
      commit("clearError");
      let data = JSON.stringify({
        old_password: rdata.old_password,
        new_password: rdata.new_password,
      });

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url:
          process.env.VUE_APP_BASE_URL +
          process.env.VUE_APP_CHANGE_PASSWORD_URL,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      try {
        const response = await axios.request(config);
        return response;
      } catch (error) {
        throw new Error(`Error ${error}`);
      }
    },

    // Usage

    signOut({ commit }) {
      commit("setLogout");
      sessionStorage.removeItem("userInfo");
    },
  },
};
