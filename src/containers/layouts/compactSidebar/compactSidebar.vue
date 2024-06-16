<template>
  <div
    class="side-content-wrap"
    @mouseenter="isMenuOver = true"
    @mouseleave="isMenuOver = false"
    @touchstart="isMenuOver = true"
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{ open: getCompactSideBarToggleProperties.isSideNavOpen }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps"
    >
      <ul class="navigation-left">
        <div class="logo">
          <img alt="" src="@/assets/images/logo.png" />
        </div>
        <li
          @mouseenter="toggleSubMenu"
          :class="{ active: selectedParentMenu == 'dashboards' }"
          class="nav-item"
          data-item="dashboards"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Bar-Chart"></i>
            <span class="nav-text">Dashboards</span>
          </a>

          <div class="triangle"></div>
        </li>
     
        <li
          @mouseenter="toggleSubMenu"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'apps' }"
          data-item="apps"
          :data-submenu="true"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Envelope"></i>
            <span class="nav-text">Chats</span>
          </a>
          <div class="triangle"></div>
        </li>
       
      </ul>
    </vue-perfect-scrollbar>

    <vue-perfect-scrollbar
      :class="{ open: getCompactSideBarToggleProperties.isSideNavOpen }"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="sidebar-left-secondary ps rtl-ps-none"
    >
      <div ref="sidebarChild">
        <i class="sidebar-close i-Close" @click="compactSideBarToggle"></i>
        <header>
          <div class="logo">
            <img src="@/assets/images/logo.png" alt />
          </div>
        </header>

        <!-- submenu-dashboards -->
        <div
          class="submenu-area"
          data-parent="dashboards"
          :class="{ 'd-block': selectedParentMenu == 'dashboards' }"
        >
          <header>
            <h6>Dashboards</h6>
            <p>Home of smart devices</p>
          </header>
          <ul class="childNav" data-parent="dashboards">
            <li class="nav-item">
              <router-link tag="a" class to="/app/dashboards/dashboard.v1">
                <i class="nav-icon i-Clock-3"></i>
                <span class="item-name">Home</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/products">
                <i class="nav-icon i-Clock-4"></i>
                <span class="item-name">chats</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/dashboards/dashboard.v3">
                <i class="nav-icon i-Over-Time"></i>
                <span class="item-name">Version 3</span>
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link tag="a" class to="/app/dashboards/dashboard.v4">
                <i class="nav-icon i-Clock"></i>
                <span class="item-name">Version 4</span>
              </router-link> -->
            </li>
          </ul>
        </div>
        <!-- end dashboards -->
        <div
          class="submenu-area"
          data-parent="ui-kits"
          :class="{ 'd-block': selectedParentMenu == 'ui-kits' }"
        >
          <header>
            <h6>Chats</h6>
            <p>You most recent chats.</p>
          </header>
          <ul class="childNav" data-parent="ui-kits">
            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/chat">
                <i class="nav-icon i-Bell1"></i>
                <span class="item-name">Chats</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/accordion">
                <i class="nav-icon i-Split-Horizontal-2-Window"></i>
                <span class="item-name">Accordion</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/badges">
                <i class="nav-icon i-Medal-2"></i>
                <span class="item-name">Badges</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/buttons">
                <i class="nav-icon i-Cursor-Click"></i>
                <span class="item-name">Buttons</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/cards">
                <i class="nav-icon i-Line-Chart-2"></i>
                <span class="item-name">Cards</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/carousel">
                <i class="nav-icon i-Video-Photographer"></i>
                <span class="item-name">Carousels</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/list">
                <i class="nav-icon i-Belt-3"></i>
                <span class="item-name">Lists</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/pagination">
                <i class="nav-icon i-Arrow-Next"></i>
                <span class="item-name">Paginations</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/popover">
                <i class="nav-icon i-Speach-Bubble-2"></i>
                <span class="item-name">Popover</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/progressbar">
                <i class="nav-icon i-Loading"></i>
                <span class="item-name">Progressbar</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/bootstrap-tab">
                <i class="nav-icon i-New-Tab"></i>
                <span class="item-name">Tabs</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/modals">
                <i class="nav-icon i-Duplicate-Window"></i>
                <span class="item-name">Modals</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/collapsible">
                <i class="nav-icon i-Width-Window"></i>
                <span class="item-name">Collapsible</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/ui-kits/typography">
                <i class="nav-icon i-Width-Window"></i>
                <span class="item-name">Typography</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- end ui-kits -->

        <div
          class="submenu-area"
          data-parent="extrakits"
          :class="{ 'd-block': selectedParentMenu == 'extrakits' }"
        >
          <header>
            <h6>Extra Kits</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="extrakits">
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/dropdown">
                <i class="nav-icon i-Arrow-Down"></i>
                <span class="item-name">Dropdown</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/imageCropper">
                <i class="nav-icon i-Crop-2"></i>
                <span class="item-name">Image Cropper</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/loaders">
                <i class="nav-icon i-Loading-3"></i>
                <span class="item-name">Loaders</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/vueDraggable">
                <i class="nav-icon i-Two-Windows"></i>
                <span class="item-name">Vue Draggable</span>
                <span class="ml-2 badge badge-pill badge-danger">New</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/vueTree">
                <i class="nav-icon i-Up---Down-3"></i>
                <span class="item-name">Vue Tree</span>
                <span class="ml-2 badge badge-pill badge-danger">New</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/toasts">
                <i class="nav-icon i-Bell"></i>
                <span class="item-name">Toastr</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/sweetAlerts">
                <i class="nav-icon i-Approved-Window"></i>
                <span class="item-name">Sweet Alerts</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/tour">
                <i class="nav-icon i-Plane"></i>
                <span class="item-name">User Tour</span>
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link tag="a" class to="/app/extraKits/vCalendar">
                <i class="nav-icon i-Calendar-4"></i>
                <span class="item-name">V-Calendar</span>
              </router-link>
            </li> -->
          </ul>
        </div>
        <!-- end of extra kits -->
        <div
          class="submenu-area"
          data-parent="apps"
          :class="{ 'd-block': selectedParentMenu == 'apps' }"
        >
          <header>
            <h6>Live chats</h6>
            <p>Turn your  visters into customers</p>
          </header>
          <ul class="childNav" data-parent="apps">
           

            <li class="nav-item">
              <router-link tag="a" class to="/app/apps/chat">
                <i class="nav-icon i-Add-File"></i>
                <span class="item-name">Chats</span>
              </router-link>
            </li>
            
          </ul>
        </div>
     
      </div>
    </vue-perfect-scrollbar>
    <div
      @click="removeOverlay()"
      class="sidebar-overlay"
      :class="{
        open:
          getCompactSideBarToggleProperties.isSideNavOpen &&
          windowWidth <= 1200,
      }"
    ></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isMobile } from "mobile-device-detect";
export default {
  data() {
    return {
      isMenuOver: false,
      selectedParentMenu: "",
      isMobile,
      windowWidth: window.innerWidth,

    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },

  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    ...mapGetters(["getCompactSideBarToggleProperties"]),
  },

  methods: {
    ...mapActions(["changeCompactSidebarProperties"]),

    removeOverlay() {
      this.changeCompactSidebarProperties();
      // if (window.innerWidth<=1200) {
      //   this.changeSidebarProperties();
      // }
      this.toggleSelectedParentMenu();
    },

    compactSideBarToggle(el) {
      // console.log("test");
      if (this.getCompactSideBarToggleProperties.isSideNavOpen) {
        this.changeCompactSidebarProperties();
      }
    },

    handleWindowResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth <= 1200) {
        if (this.getCompactSideBarToggleProperties.isSideNavOpen) {
          this.changeCompactSidebarProperties();
        }
      } else {
        if (!this.getCompactSideBarToggleProperties.isSideNavOpen) {
          this.changeCompactSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    toggleSubMenu(e) {
      let hasSubmenu = e.target.dataset.submenu;
      let parent = e.target.dataset.item;
      if (hasSubmenu) {
        this.selectedParentMenu = parent;
      } else {
        // this.selectedParentMenu = parent;
        this.toggleSelectedParentMenu();
      }
    },
    returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },

    toggleSidebarDropdwon(event) {
      let dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");

      event.currentTarget.classList.toggle("open");

      dropdownMenus.forEach((dropdown) => {
        dropdown.classList.remove("open");
      });
    },
  },
};
</script>
