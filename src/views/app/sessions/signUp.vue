<template>
  <div
    class="auth-layout-wrap"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div
            class="col-md-6 text-center"
            style="background-size: cover"
            :style="{ backgroundImage: 'url(' + signInImage + ')' }"
          >
            <div class="pl-3 auth-right">
              <div class="auth-logo text-center mt-4">
                <img :src="logo" alt="" />
              </div>
              <div class="flex-grow-1"></div>
              <div class="w-100 mb-30">
                <router-link
                  to="signIn"
                  class="btn btn-outline-primary btn-outline-email btn-block btn-icon-text btn-rounded"
                  href="signin.html"
                >
                  <i class="i-Mail-with-At-Sign"></i> Sign in with Email
                </router-link>
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
              <div class="flex-grow-1"></div>
            </div>
          </div>

          <b-col md="6">
            <div class="p-4">
              <h1 class="mb-3 text-18">Sign Up</h1>
              <b-form @submit.prevent="submit">
                <b-form-group label="User Name">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Username"
                    v-model.trim="$v.username.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.username.minLength"
                    >Name must have at least
                    {{ $v.username.$params.minLength.min }} letters.</b-alert
                  >
                </b-form-group>

                <b-form-group label="First Name">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="First Name"
                    v-model.trim="$v.fName.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.fName.minLength"
                    >Name must have at least
                    {{ $v.fName.$params.minLength.min }} letters.</b-alert
                  >
                </b-form-group>

                <b-form-group label="Last Name">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Last Name"
                    v-model.trim="$v.lName.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.lName.minLength"
                    >Name must have at least
                    {{ $v.lName.$params.minLength.min }} letters.</b-alert
                  >
                </b-form-group>

                <b-form-group label="Email">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="email"
                    v-model="email"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group label="Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    aria-placeholder="Password"
                    type="password"
                    v-model.trim="$v.password.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.password.minLength"
                    >Minimum
                    {{ $v.password.$params.minLength.min }} charaters.</b-alert
                  >

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.password.notCommon"
                  >
                    This password is too common. Please choose a different
                    password.
                  </b-alert>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.password.notNumeric"
                  >
                    This password is entirely numeric. Please include some
                    non-numeric characters.
                  </b-alert>
                </b-form-group>

                <b-form-group label="Repeat Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model.trim="$v.repeatPassword.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.repeatPassword.sameAsPassword"
                    >Passwords must be identical.</b-alert
                  >
                </b-form-group>

                <b-button
                  type="submit"
                  block
                  variant="primary"
                  :disabled="submitStatus === 'PENDING' || $v.$invalid"
                  class="btn-rounded"
                  >Sign Up</b-button
                >

                <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                  {{ makeToastTwo("success") }}
                  {{ this.$router.push("/") }}
                </p>
                <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
                  {{ makeToast("danger") }}
                </p>
                <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
              </b-form>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";

function notCommon(value) {
  // List of common passwords - you can add more
  const commonPasswords = ["123456", "password", "admin"];
  return !commonPasswords.includes(value);
}

function notNumeric(value) {
  // Check if the value is entirely numeric
  return !/^\d+$/.test(value);
}
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignUp",
  },

  data() {
    return {
      username: "",
      fName: "",
      lName: "",
      email: "",
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      password: "",
      repeatPassword: "",
      submitStatus: null,
    };
  },

  validations: {
    username: {
      required,
      minLength: minLength(4),
    },

    fName: {
      required,
      minLength: minLength(4),
    },

    lName: {
      required,
      minLength: minLength(4),
    },

    password: {
      required,
      minLength: minLength(8),
      notCommon,
      notNumeric,
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },

    // add input
    // peopleAdd: {
    //   required,
    //   minLength: minLength(3),
    //   $each: {
    //     multipleName: {
    //       required,
    //       minLength: minLength(5)
    //     }
    //   }
    // },
    // validationsGroup:['peopleAdd.multipleName']
  },

  computed: {
    ...mapGetters(["loggedInUser", "singUploading", "error"]),
    ...mapGetters(["signUpuser", "error"]),
  },

  methods: {
    ...mapActions(["signUserUp"]),

    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.submitStatus = "PENDING";
          sessionStorage.clear();
          const response = await this.signUserUp({
            username: this.username,
            first_name: this.fName,
            last_name: this.lName,
            email: this.email,
            password: this.password,
            password2: this.repeatPassword,
          });

          if (response.status === 201) {
            const data = await response.json(); // Add await here
            console.log(data);
            sessionStorage.setItem("registeredUser", JSON.stringify(data));
            this.notificationToast(this, true, "success", "Account Created");
            this.$router.push("/sessions/validate");
          } else {
            const errorData = await response.json(); // Add await here

            this.submitStatus = "ERROR";
            this.notificationToast(this, true, "warning", errorData);
            setTimeout(() => {
              this.submitStatus = "OK";
            }, 1000);
          }
        } catch (error) {
          console.log(error.message);
          this.submitStatus = "ERROR";
          this.notificationToast(this, true, "warning", error);
        }
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Created Account", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    notificationToast(vm, append = false, variant = null, msg) {
      vm.$bvToast.toast(`${msg}`, {
        title: `${variant || "default"}`,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
      });
    },

    inputSubmit() {
      // console.log("submitted");
    },
  },

  watch: {},
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
