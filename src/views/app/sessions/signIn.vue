<template>
  <div
    class="auth-layout-wrap"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-6">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <h1 class="mb-3 text-18">Sign In</h1>
              <b-form @submit.prevent="formSubmit">
                <b-form-group label="Username" class="text-12">
                  <b-form-input
                    class="form-control-rounded"
                    type="text"
                    v-model="username"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Password" class="text-12">
                  <b-form-input
                    class="form-control-rounded"
                    type="password"
                    v-model="password"
                  ></b-form-input>
                </b-form-group>

                <!-- <b-button block to="/" variant="primary btn-rounded mt-2"
                  >Sign In</b-button
                > -->
                <b-button
                  type="submit"
                  tag="button"
                  class="btn-rounded btn-block mt-2"
                  variant="primary mt-2"
                  :disabled="loading"
                >
                  SignIn
                </b-button>
                <div v-once class="typo__p" v-if="loading">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
                <b-button
                  to="signUp"
                  block
                  variant="primary mt-2"
                  class="btn-rounded"
                  >Create an account</b-button
                >
              </b-form>

              <div class="mt-3 text-center">
                <router-link to="forgot" tag="a" class="text-muted">
                  <u>Forgot Password?</u>
                </router-link>
              </div>
            </div>
          </div>

          <b-col
            md="6"
            class="text-center"
            style="backgroundsize: cover"
            :style="{ backgroundImage: 'url(' + signInImage + ')' }"
          >
            <div class="pr-3 auth-right">
              <router-link
                to="signUp"
                class="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                href="signup.html"
              >
                <i class="i-Mail-with-At-Sign"></i> Sign up with Email
              </router-link>
              <a
                class="btn btn-rounded btn-outline-primary btn-outline-google btn-block btn-icon-text"
              >
                <i class="i-Google-Plus"></i> Sign up with Google
              </a>
              <a
                class="btn btn-rounded btn-outline-primary btn-block btn-icon-text btn-outline-facebook"
              >
                <i class="i-Facebook-2"></i> Sign up with Facebook
              </a>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import { defineComponent } from "vuex";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignIn",
  },
  data() {
    return {
      username: "",
      password: "",
      transportsUser: {
        websocket: window.config.transports.websocket,
      },
      // // password: "vue006",
      userId: "",
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
    };
  },
  setup() {},

  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
    ...mapGetters(["loggedInUser", "loading", "error"]),
  },

  methods: {
    ...mapActions(["login", "getUserProfile"]),
    async formSubmit() {
      try {
        const response = await this.login({
          username: this.username,
          password: this.password,
        });
        if (response.status === 200) {
          try {
            const prres = await this.getUserProfile();
            this.notificationToast(
              this,
              true,
              "success",
              "Successfully Logged In"
            );

            if (prres.status === 200) {
              try {
                // await this.$xmpp.create(
                //   this.username,
                //   this.password,
                //   null,
                //   this.transportsUser,
                //   this
                // );
                const requestData = {
                  jid: this.username,
                  password: this.password,
                  domain: "localhost",
                  context: this,
                };
                console.log(requestData);
                await this.$store.dispatch("createXmppClient", requestData);
                // await this.$xmpp.connect();
                setTimeout(() => {
                  this.$router.push("/app/dashboards/dashboard.v1");
                }, 500);
              } catch (error) {
                this.notificationToast(
                  this,
                  true,
                  "warning",
                  `${error.message}`
                );
              }
            }
          } catch (error) {
            this.notificationToast(
              this,
              true,
              "warning",
              "Error getting user profile"
            );
          }
        } else {
          this.notificationToast(this, true, "warning", "Error Logging In");
        }
      } catch (error) {
        console.log(error);
        this.notificationToast(this, true, "warning", `${error.message} `);
      }
    },

    notificationToast(vm, append = false, variant = null, msg) {
      vm.$bvToast.toast(`${msg}`, {
        title: `${msg}`,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
      });
    },
  },
  watch: {
    // loggedInUser(val) {
    //   console.log(val);
    //   if (val && val.access && val.refresh) {
    //     this.userProfile()
    //       .then(( res) => {
    //         this.notificationToast(
    //           this,
    //           true,
    //           "success",
    //           "Successfully Logged In"
    //         );
    //         setTimeout(() => {
    //           this.$router.push("/app/dashboards/dashboard.v1");
    //         }, 500);
    //          if (res.status === 200) {
    //           this.$router.push("/app/dashboards/dashboard.v1");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         this.notificationToast(this, true, "warning", "Error Logging In");
    //         // this.$router.push("/sessions/signIn");
    //       });
    //   }
    // },
    // error(val) {
    //   if (val != null) {
    //     console.log(val);
    //     this.notificationToast(this, true, "warning", val);
    //   }
    // },
  },
};
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
