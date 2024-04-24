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
              <!-- <b-alert
                v-if="validation_message"
                :message="validation_message"
                type="success"
              ></b-alert> -->
              <b-alert
                show
                variant="success"
                class="error col mt-1"
                v-if="validation_message"
              >
                {{ validation_message }}
              </b-alert>
              <h1 class="mb-3 text-18">Activete your account</h1>
              <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="email">OTP</label>
                  <input
                    id="otp"
                    class="form-control form-control-rounded"
                    type="text"
                    v-model="otp"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    v-model="email"
                    class="form-control form-control-rounded"
                    type="email"
                  />
                </div>
                <b-button
                  type="submit"
                  block
                  variant="primary"
                  :disabled="submitStatus === 'PENDING'"
                  class="btn-rounded"
                  >Submit</b-button
                >
              </form>
              <div class="mt-3 text-center">
                <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
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
      validation_message: "",
      submitStatus: "",
      otp: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["activateAccount"]),
    notificationToast(vm, append = false, variant = null, msg) {
      vm.$bvToast.toast(`${msg}`, {
        title: `Notification`,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
      });
    },

    getValidationMessageFromSessionStroge() {
      // key =registeredUser
      this.validation_message = JSON.parse(
        sessionStorage.getItem("registeredUser")
      ).message;
    },

    async submit() {
      this.submitStatus = "PENDING";
      const email = this.email;
      const otp = this.otp;

      const response = await this.activateAccount({ otp, email });

      if (response.status === 200) {
        this.submitStatus = "DONE";
        const data = await response.json();
        this.validation_message = data.message;
        this.notificationToast(this, true, "success", response.message);
        this.$router.push("/sessions/signIn");
      } else {
        const data = await response.json();
        this.notificationToast(this, true, "danger", data.error);
      }
      this.submitStatus = "DONE";
    },
  },
  mounted() {
    this.getValidationMessageFromSessionStroge();
    this.email = JSON.parse(sessionStorage.getItem("registeredUser")).email;
  },
};
</script>
