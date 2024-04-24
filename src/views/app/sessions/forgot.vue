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
                <img :src="logo" alt="" />
              </div>
              <b-alert
                show
                variant="success"
                class="error col mt-1"
                v-if="message"
              >
                {{ message }}
              </b-alert>

              <h1 class="mb-3 text-18">Forgot Password</h1>
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    v-model="email"
                    class="form-control form-control-rounded"
                    type="email"
                  />
                </div>
                <button class="btn btn-primary btn-block btn-rounded mt-3">
                  Reset Password
                </button>
                <div class="mt-3 text-center">
                  <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
                    <div class="spinner sm spinner-primary mt-3"></div>
                  </div>
                </div>
              </form>
              <div class="mt-3 text-center">
                <router-link to="signIn" tag="a" class="text-muted">
                  <u>Sign In</u>
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 text-center"
            style="background-size: cover"
            :style="{ backgroundImage: 'url(' + formImage + ')' }"
          >
            <div class="pr-3 auth-right">
              <a
                class="btn btn-outline-primary btn-outline-email btn-block btn-icon-text btn-rounded"
                href="signup.html"
              >
                <i class="i-Mail-with-At-Sign"></i> Sign up with Email
              </a>
              <a
                class="btn btn-outline-primary btn-outline-google btn-block btn-icon-text btn-rounded"
              >
                <i class="i-Google-Plus"></i> Sign in with Google
              </a>
              <a
                class="btn btn-outline-primary btn-outline-facebook btn-block btn-icon-text btn-rounded"
              >
                <i class="i-Facebook-2"></i> Sign in with Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Forgot Password",
  },
  data() {
    return {
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      formImage: require("@/assets/images/photo-long-3.jpg"),
      message: "",
      email: "",
      submitStatus: "",
    };
  },

  methods: {
    ...mapActions(["forgotPassword"]),

    notificationToast(vm, append = false, variant = null, msg) {
      vm.$bvToast.toast(`${msg}`, {
        title: `${variant || "default"}`,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
      });
    },

    async submitForm(e) {
      e.preventDefault();
      try {
        this.submitStatus = "PENDING";
        const response = await this.forgotPassword({ email: this.email });

        if (response.status == 200) {
          this.submitStatus = "DONE";
          const data = await response.json();
          this.message = data.message;
          this.$router.push({ name: "reset_password" });
        } else {
          this.submitStatus = "FAILED";
          const data = await response.json();
          this.notificationToast(this, false, "danger", data.message);
        }
      } catch (error) {
        e.preventDefault();

        this.submitStatus = "FAILED";
        this.validation_message = error;
      }
    },
  },
};
</script>
