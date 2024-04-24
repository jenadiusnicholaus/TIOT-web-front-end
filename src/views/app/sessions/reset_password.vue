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
              <h1 class="mb-3 text-18">Reset Password</h1>
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    v-model="email"
                    class="form-control form-control-rounded"
                    type="email"
                  />
                </div>
                <div class="form-group">
                  <label for="email">New password</label>
                  <input
                    id="new_password"
                    v-model="new_password"
                    class="form-control form-control-rounded"
                    type="password"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Confirm password</label>
                  <input
                    id="confirm_password"
                    v-model="confirm_password"
                    class="form-control form-control-rounded"
                    type="password"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Request Token</label>
                  <input
                    id="token"
                    v-model="token"
                    class="form-control form-control-rounded"
                    type="text"
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

      token: "",
      new_password: "",
      confirm_password: "",
      email: "",
      submitStatus: "",
    };
  },

  methods: {
    ...mapActions(["resetPassword"]),

    notificationToast(vm, append = false, variant = null, msg) {
      vm.$bvToast.toast(`${msg}`, {
        title: `${variant || "default"}`,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
      });
    },

    async submitForm() {
      this.submitStatus = "PENDING";
      try {
        const response = await this.resetPassword({
          token: this.token,
          new_password: this.new_password,
          confirm_password: this.confirm_password,
          email: this.email,
        });
        if (response.status === 200) {
          const data = await response.json();
          this.notificationToast(this, true, "success", data.message);
          this.submitStatus = "DONE";
          this.$router.push({ name: "signIn" });
        } else {
          this.submitStatus = "FAILED";
          const data = await response.json();
          this.notificationToast(this, true, "danger", data.message);
        }
      } catch (error) {
        this.notificationToast(this, true, "danger", error);
        this.submitStatus = "FAILED";
        this.validation_message = error;
      }
    },
  },
};
</script>
