<template>
  <div
    class="main-content"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <breadcumb :page="'User Profile'" :folder="'Pages'" />

    <div class="card user-profile o-hidden mb-30">
      <div
        class="header-cover"
        style="
          background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg);
        "
      ></div>
      <div class="user-info">
        <img class="profile-picture avatar-lg mb-2" :src="profilePic" alt="" />
        <p class="m-0 text-24">{{ username }}</p>
        <p class="text-muted m-0"></p>
      </div>
      <div class="card-body">
        <div>
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="Change Password" active>
              <div class="row">
                <div class="col-md-6">
                  <form @submit.prevent="submitForm">
                    <div class="form-group">
                      <label for="email">Old password</label>
                      <input
                        id="new_password"
                        v-model="old_password"
                        class="form-control form-control-rounded"
                        type="password"
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

                    <button class="btn btn-primary btn-block btn-rounded mt-3">
                      Sumbit
                    </button>

                    <div class="mt-3 text-center">
                      <div
                        v-once
                        class="typo__p"
                        v-if="submitStatus === 'PENDING'"
                      >
                        <div class="spinner sm spinner-primary mt-3"></div>
                      </div>
                    </div>
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </b-tab>
            <b-tab title="My details">
              <h4>Personal Information</h4>

              <hr />

              <button
                type="button"
                class="btn round btn-facebook btn-icon rounded-circle m-1"
              >
                <span class="ul-btn__icon"><i class="i-Pen-3"></i></span>
              </button>

              <div class="row">
                <div class="col-md-4 col-6">
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-Boy text-16 mr-1"></i> Username
                    </p>
                    <span>{{ username }}</span>
                  </div>
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-Boy text-16 mr-1"></i> First Name
                    </p>
                    <span>{{ profile.user.first_name }}</span>
                  </div>
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-Boy text-16 mr-1"></i>Last name
                    </p>
                    <span>{{ profile.user.last_name }}</span>
                  </div>
                </div>
                <div class="col-md-4 col-6">
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-MaleFemale text-16 mr-1"></i> Phone Number
                    </p>
                    <span>{{ profile.phone }}</span>
                  </div>
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-MaleFemale text-16 mr-1"></i> Email
                    </p>
                    <span>{{ profile.user.email }}</span>
                  </div>
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-Cloud-Weather text-16 mr-1"></i> Website
                    </p>
                    <span>www.ui-lib.com</span>
                  </div>
                </div>
                <div class="col-md-4 col-6">
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-Face-Style-4 text-16 mr-1"></i> Active Member
                    </p>
                    <span>{{ profile.user.is_active ? "yes" : "No" }}</span>
                  </div>
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-Professor text-16 mr-1"></i> Active Rental
                      Owner
                    </p>
                    <span> {{ profile.is_rental_owner ? "yes" : "No" }}</span>
                  </div>
                  <div class="mb-30">
                    <p class="text-primary mb-1">
                      <i class="i-Home1 text-16 mr-1"></i> Member
                    </p>
                    <span>{{ profile.user.is_staff ? "Yes" : "No" }}</span>
                  </div>
                </div>
              </div>

              <hr />

              <h4>Other Info</h4>

              <div class="row">
                <div class="col-md-2 col-sm-4 col-6 text-center">
                  <i class="i-Plane text-32 text-primary"></i>
                  <p class="text-16 mt-1">Travelling</p>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                  <i class="i-Camera text-32 text-primary"></i>
                  <p class="text-16 mt-1">Photography</p>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                  <i class="i-Car-3 text-32 text-primary"></i>
                  <p class="text-16 mt-1">Driving</p>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                  <i class="i-Gamepad-2 text-32 text-primary"></i>
                  <p class="text-16 mt-1">Gaming</p>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                  <i class="i-Music-Note-2 text-32 text-primary"></i>
                  <p class="text-16 mt-1">Music</p>
                </div>
                <div class="col-md-2 col-sm-4 col-6 text-center">
                  <i class="i-Shopping-Bag text-32 text-primary"></i>
                  <p class="text-16 mt-1">Shopping</p>
                </div>
              </div>
            </b-tab>
          </b-tabs>
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
    title: "Profile",
  },

  data() {
    return {
      old_password: "",
      new_password: "",
      submitStatus: "",
      profile: JSON.parse(sessionStorage.getItem("userprofile")),
    };
  },

  computed: {
    profilePic() {
      return this.profile?.user_profile_pic
        ? this.profile?.user_profile_pic
        : require("@/assets/images/avata_profile.jpeg");
    },

    username() {
      return this.profile?.user?.username;
    },
  },

  methods: {
    ...mapActions(["changePassword"]),

    notificationToast(vm, append = false, variant = null, msg) {
      vm.$bvToast.toast(`${msg}`, {
        title: `${variant || "default"}`,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
      });
    },

    async submitForm() {
      try {
        this.submitStatus = "PENDING";
        const response = await this.changePassword({
          old_password: this.old_password,
          new_password: this.new_password,
        });
        if (response.status === 200) {
          this.submitStatus = "DONE";
          this.notificationToast(this, true, "success", "Password changed");
        } else {
          const data = await response.json();
          this.submitStatus = "FAILED";
          this.notificationToast(this, false, "danger", data.message);
        }
      } catch (error) {
        this.submitStatus = "FAILED";
        this.notificationToast(this, false, "danger", error);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  position: absolute;
  right: 0;
}
</style>
