<template>
  <div class="main-header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt />
    </div>

    <div @click="sideBarToggle" class="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="d-flex align-items-center">
      <!-- Mega menu -->
      <div
        :class="{ show: isMegaMenuOpen }"
        class="dropdown mega-menu d-none d-md-block"
        v-on-clickaway="closeMegaMenu"
      >
        <a
          href="#"
          class="btn text-muted dropdown-toggle mr-3"
          id="dropdownMegaMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleMegaMenu"
          >Mega Menu</a
        >
        <div
          class="dropdown-menu text-left"
          :class="{ show: isMegaMenuOpen }"
          aria-labelledby="dropdownMenuButton"
        >
          <div class="row m-0">
            <div class="col-md-4 p-4 text-left bg-img">
              <h2 class="title">
                Mega Menu
                <br />Sidebar
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores natus laboriosam fugit, consequatur.
              </p>
              <p class="mb-30">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem odio amet eos dolore suscipit placeat.
              </p>
              <button class="btn btn-lg btn-rounded btn-outline-warning">
                Learn More
              </button>
            </div>
            <div class="col-md-4 p-4 text-left">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Features
              </p>
              <div class="menu-icon-grid w-auto p-0">
                <a href="#"> <i class="i-Shop-4"></i> Home </a>
                <a href="#"> <i class="i-Library"></i> UI Kits </a>
                <a href="#"> <i class="i-Drop"></i> Apps </a>
                <a href="#">
                  <i class="i-File-Clipboard-File--Text"></i> Forms
                </a>
                <a href="#"> <i class="i-Checked-User"></i> Sessions </a>
                <a href="#"> <i class="i-Ambulance"></i> Support </a>
              </div>
            </div>
            <div class="col-md-4 p-4 text-left">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Components
              </p>
              <ul class="links">
                <li>
                  <a href="accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="badges.html">Badges</a>
                </li>
                <li>
                  <a href="carousel.html">Carousels</a>
                </li>
                <li>
                  <a href="lists.html">Lists</a>
                </li>
                <li>
                  <a href="popover.html">Popover</a>
                </li>
                <li>
                  <a href="tables.html">Tables</a>
                </li>
                <li>
                  <a href="datatables.html">Datatables</a>
                </li>
                <li>
                  <a href="modals.html">Modals</a>
                </li>
                <li>
                  <a href="nouislider.html">Sliders</a>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- / Mega menu -->
      <div class="search-bar" @click="toggleSearch">
        <input type="text" placeholder="Search" />
        <i class="search-icon text-muted i-Magnifi-Glass1"></i>
      </div>
    </div>

    <div style="margin: auto"></div>

    <div class="header-part-right">
      <!-- Full screen toggle -->
      <i
        class="i-Full-Screen header-icon d-none d-sm-inline-block"
        @click="handleFullScreen"
      ></i>
      <!-- <i class="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i> -->
      <!-- Grid menu Dropdown -->

      <div class="dropdown">
        <b-dropdown
          id="dropdown"
          text="Dropdown Button"
          class="m-md-2"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <i
              class="i-Safe-Box text-muted header-icon"
              role="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></i>
          </template>
          <div class="menu-icon-grid">
            <a href="#"> <i class="i-Shop-4"></i> Home </a>
            <a href="#"> <i class="i-Library"></i> UI Kits </a>
            <a href="#"> <i class="i-Drop"></i> Apps </a>
            <a href="#"> <i class="i-File-Clipboard-File--Text"></i> Forms </a>
            <a href="#"> <i class="i-Checked-User"></i> Sessions </a>
            <a href="#"> <i class="i-Ambulance"></i> Support </a>
          </div>
        </b-dropdown>
      </div>
      <!-- Notificaiton -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2 badge-top-container"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <span class="badge badge-primary">3</span>
            <i class="i-Bell text-muted header-icon"></i>
          </template>
          <!-- Notification dropdown -->
          <vue-perfect-scrollbar
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
            ref="myData"
            class="dropdown-menu-right rtl-ps-none notification-dropdown ps scroll"
          >
            <!-- <div class="dropdown-menu-right rtl-ps-none notification-dropdown"> -->
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Speach-Bubble-6 text-primary mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>New message</span>
                  <!-- <span class="badge badge-pill badge-primary ml-1 mr-1">new</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">10 sec ago</span>
                </p>
                <p class="text-small text-muted m-0">
                  James: Hey! are you busy?
                </p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Receipt-3 text-success mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>New order received</span>
                  <!-- <span class="badge badge-pill badge-success ml-1 mr-1">new</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">2 hours ago</span>
                </p>
                <p class="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Empty-Box text-danger mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Product out of stock</span>
                  <!-- <span class="badge badge-pill badge-danger ml-1 mr-1">3</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto"
                    >10 hours ago</span
                  >
                </p>
                <p class="text-small text-muted m-0">
                  Headphone E67, R98, XL90, Q77
                </p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Data-Power text-success mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Server Up!</span>
                  <!-- <span class="badge badge-pill badge-success ml-1 mr-1">3</span> -->
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto"
                    >14 hours ago</span
                  >
                </p>
                <p class="text-small text-muted m-0">
                  Server rebooted successfully
                </p>
              </div>
            </div>
            <!-- </div> -->
          </vue-perfect-scrollbar>
        </b-dropdown>
      </div>
      <!-- Notificaiton End -->

      <!-- User avatar dropdown -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2 user col align-self-end"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <div class="image-wrapper">
              <img
                :src="profilePic"
                id="userDropdown"
                alt
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div class="status-indicator" :class="{ online: isOnline }"></div>
            </div>
          </template>

          <div class="dropdown-menu-right" aria-labelledby="userDropdown">
            <div class="dropdown-header">
              <i class="i-Lock-User mr-1"></i>{{ username }}
            </div>
            <a @click="gotoProfile()" class="dropdown-item">profile</a>
            <a class="dropdown-item">
              <b-button v-b-modal.modal-sm1 variant="outline-success m-1">
                change Status</b-button
              >

              >
            </a>
            <a
              style="color: red"
              class="dropdown-item"
              href="#"
              @click.prevent="logoutUser"
              >Sign out</a
            >
          </div>
        </b-dropdown>
      </div>
    </div>
    <search-component
      :isSearchOpen.sync="isSearchOpen"
      @closeSearch="toggleSearch"
    ></search-component>

    <b-modal id="modal-sm1" size="sm" title="Change Presence" hide-footer>
      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="online"
            value="online"
            v-model="presence"
            @change="updateUserPresence"
          />
          <label class="form-check-label" for="online">
            <span class="badge badge-pill badge-success">Online</span>
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="away"
            value="away"
            v-model="presence"
            @change="updateUserPresence"
          />
          <label class="form-check-label" for="away">
            <span class="badge badge-pill badge-warning">Away</span>
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="offline"
            value="offline"
            v-model="presence"
            @change="updateUserPresence"
          />
          <label class="form-check-label" for="offline">
            <span class="badge badge-pill badge-danger">Offline</span>
          </label>
        </div>
      </div>
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
    </b-modal>
  </div>

  <!-- header top menu end -->
</template>
<script>
import Util from "@/utils";
import Sidebar from "./Sidebar";
import searchComponent from "../common/search";
import { isMobile } from "mobile-device-detect";
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Sidebar,
    searchComponent,
  },

  data() {
    return {
      isDisplay: true,
      isStyle: true,
      presence: "online",
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      profile: JSON.parse(sessionStorage.getItem("userprofile")),
    };
  },
  mounted() {
    // document.addEventListener("click", this.closeMegaMenu);
    // this.profile = JSON.parse(localStorage.getItem("userprofile"));
    // console.log(this.profile);
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties", "getPresence"]),
    profilePic() {
      return this.profile?.user_profile_pic
        ? this.profile?.user_profile_pic
        : require("@/assets/images/avata_profile.jpeg");
    },

    isOnline() {
      console.log(this.getPresence);
      return this.getPresence === "online" ? true : false;
    },

    username() {
      return this.profile?.user?.username;
    },
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",
      "changeSidebarProperties",
      "changeThemeMode",
      "signOut",

      "updatePresence",
    ]),

    updateUserPresence() {
      this.updatePresence(this.presence);
    },

    gotoProfile() {
      this.$router.push("/app/pages/profile");
    },

    handleFullScreen() {
      Util.toggleFullScreen();
    },
    logoutUser() {
      this.signOut();
      this.$router.push("/sessions/signIn");
    },

    closeMegaMenu() {
      this.isMegaMenuOpen = false;
      // console.log(this.isMouseOnMegaMenu);
      // if (!this.isMouseOnMegaMenu) {
      //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
      // }
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },

    sideBarToggle(el) {
      console.log(el);
      if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        isMobile
      ) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        !this.getSideBarToggleProperties.isActiveSecondarySideNav
      ) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        // console.log("4");

        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
        // console.log("4");
      }
    },
  },
};
</script>

<style scoped>
.image-wrapper {
  position: relative;
  display: inline-block;
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: red;
}

.status-indicator.online {
  background-color: green;
}
</style>
