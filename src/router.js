import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth_guard/authenticate";
// import validationChecker from "./auth_guard/validation_guard";

Vue.use(Router);

// create new router

const routes = [
  {
    // path: "/",
    // beforeEnter: authenticate,
    // component: () => import("./views/app"),
    // redirect: "/app/dashboards/dashboard.v1",

    path: "/",
    name: "landing_page",
    component: () => import("./views/app/pages/landing_page"),
  },

  {
    path: "/app/dashboards",
    component: () => import("./views/app"),
    beforeEnter: authenticate,
    redirect: "/app/dashboards/dashboard.v1",

    children: [
      {
        path: "/app/dashboards",
        component: () => import("./views/app/dashboards"),
        children: [
          {
            path: "dashboard.v1",
            name: "dashboard.v1",
            component: () => import("./views/app/dashboards/dashboard.v1"),
          },
        ],
      },

      {
        path: "/app/ui-kits",
        component: () => import("./views/app/ui-kits"),
        redirect: "/app/ui-kits/alerts",
        children: [
          {
            path: "alerts",
            name: "alerts",
            component: () => import("./views/app/ui-kits/alerts"),
          },
          {
            path: "accordion",
            name: "accordion",
            component: () => import("./views/app/ui-kits/accordion"),
          },
          {
            path: "badges",
            name: "badges",
            component: () => import("./views/app/ui-kits/badges"),
          },
          {
            path: "buttons",
            name: "buttons",
            component: () => import("./views/app/ui-kits/buttons"),
          },
          {
            path: "bootstrap-tab",
            name: "bootstrap-tab",
            component: () => import("./views/app/ui-kits/bootstrap-tab"),
          },
          {
            path: "cards",
            name: "cards",
            component: () => import("./views/app/ui-kits/cards"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/app/ui-kits/list"),
          },
          {
            path: "popover",
            name: "popover",
            component: () => import("./views/app/ui-kits/popover"),
          },
          {
            path: "progressbar",
            name: "progressbar",
            component: () => import("./views/app/ui-kits/progressbar"),
          },
          {
            path: "collapsible",
            name: "collapsible",
            component: () => import("./views/app/ui-kits/collapsible"),
          },
          {
            path: "modals",
            name: "modals",
            component: () => import("./views/app/ui-kits/modals"),
          },
          {
            path: "typography",
            name: "typography",
            component: () => import("./views/app/ui-kits/typography"),
          },
          {
            path: "carousel",
            name: "carousel",
            component: () => import("./views/app/ui-kits/carousel"),
          },
          {
            path: "pagination",
            name: "pagination",
            component: () => import("./views/app/ui-kits/pagination"),
          },
        ],
      },

      {
        path: "/app/extraKits",
        component: () => import("./views/app/extraKits"),
        redirect: "/app/extraKits/dropdown",
        children: [
          {
            path: "dropdown",
            component: () => import("./views/app/extraKits/dropdown"),
          },
          {
            path: "loaders",
            component: () => import("./views/app/extraKits/loaders"),
          },
          {
            path: "sweetAlerts",
            component: () => import("./views/app/extraKits/sweetAlerts"),
          },
          {
            path: "toasts",
            component: () => import("./views/app/extraKits/toasts"),
          },
          {
            path: "tour",
            component: () => import("./views/app/extraKits/tour"),
          },
          {
            path: "calendar",
            component: () => import("./views/app/extraKits/calendar"),
          },
          {
            path: "rating",
            component: () => import("./views/app/extraKits/rating"),
          },
          {
            path: "spinButton",
            component: () => import("./views/app/extraKits/spinButton"),
          },
          {
            path: "datePicker",
            component: () => import("./views/app/extraKits/datePicker"),
          },
          {
            path: "timePicker",
            component: () => import("./views/app/extraKits/timePicker"),
          },
          {
            path: "imageCropper",
            component: () => import("./views/app/extraKits/imageCropper"),
          },
          {
            path: "vuedraggable",
            component: () => import("./views/app/extraKits/vuedraggable"),
          },
          {
            path: "avatar",
            component: () => import("./views/app/extraKits/avatar"),
          },
          {
            path: "sidebar",
            component: () => import("./views/app/extraKits/sidebar"),
          },
          {
            path: "spinners",
            component: () => import("./views/app/extraKits/spinners"),
          },
          {
            path: "vueTree",
            component: () => import("./views/app/extraKits/vueTree"),
          },
        ],
      },
      //  apps
      {
        path: "/app/apps",
        component: () => import("./views/app/apps/chat.vue"),
        redirect: "/app/apps/chat",
        children: [
          {
            path: "chat",
            component: () => import("./views/app/apps/chat"),
          },
        ],
      },

      // form
      {
        path: "/app/forms",
        component: () => import("./views/app/form"),
        redirect: "/app/form/basicForms",
        children: [
          {
            path: "basicForms",
            component: () => import("./views/app/form/basicForms"),
          },
          {
            path: "basicActionBar",
            component: () => import("./views/app/form/basicActionBar"),
          },
          {
            path: "formLayouts",
            component: () => import("./views/app/form/formLayouts"),
          },
          {
            path: "formWizard",
            component: () => import("./views/app/form/formWizard"),
          },
          {
            path: "tagInput",
            component: () => import("./views/app/form/tagInput"),
          },
          {
            path: "mask",
            component: () => import("./views/app/form/masks"),
          },
          {
            path: "formComponent",
            component: () => import("./views/app/form/formComponent"),
          },
          {
            path: "datepicker",
            component: () => import("./views/app/form/datepicker"),
          },
          {
            path: "V2Datepicker",
            component: () => import("./views/app/form/V2Datepicker"),
          },
        ],
      },
      // datatables
      {
        path: "/app/datatables",
        component: () => import("./views/app/datatables"),
        redirect: "/app/datatables/list",
        children: [
          {
            path: "paging",
            name: "paging",
            component: () => import("./views/app/datatables/paging"),
          },
          {
            path: "filter",
            name: "filter",
            component: () => import("./views/app/datatables/filter"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/app/datatables/list"),
          },
        ],
      },

      // widget
      {
        path: "/app/widgets",
        component: () => import("./views/app/widgets"),
        redirect: "/app/widgets/widgetCard",
        children: [
          {
            path: "widgetCard",
            component: () => import("./views/app/widgets/widgetCard"),
          },
          {
            path: "widgetStatistics",
            component: () => import("./views/app/widgets/widgetStatistics"),
          },
          {
            path: "weatherApp",
            component: () => import("./views/app/widgets/weatherApp"),
          },
          {
            path: "widgetApp",
            component: () => import("./views/app/widgets/widgetApp"),
          },
          {
            path: "widgetList",
            component: () => import("./views/app/widgets/widgetList"),
          },
        ],
      },
      // pages
      {
        path: "/app/pages",
        component: () => import("./views/app/pages"),
        redirect: "/app/pages/profile",
        children: [
          {
            path: "profile",
            // beforeEnter: authenticate,
            component: () => import("./views/app/pages/profile"),
          },
          {
            path: "error",
            component: () => import("./views/app/pages/notFound"),
          },
          {
            path: "icons",
            component: () => import("./views/app/pages/icons"),
          },
          {
            path: "search-result",
            component: () => import("./views/app/pages/search-result"),
          },
          {
            path: "pricing-table",
            component: () => import("./views/app/pages/pricingTable"),
          },
          {
            path: "faq",
            component: () => import("./views/app/pages/faq"),
          },
        ],
      },

      // chart_componnent//////////----------------------////////////////////////

      {
        path: "/app/charts",
        component: () => import("./views/app/chart"),
        redirect: "/app/charts/eChart",
        children: [
          {
            // problem
            path: "apexAreaChart",
            component: () => import("./views/app/chart/apexChart"),
          },
          {
            path: "apexBarChart",
            component: () => import("./views/app/chart/apexBarChart"),
          },
          // {
          //   path: "apexBasicChart",
          //   component: () => import("./views/app/chart/apexBasicChart")
          // },
          {
            path: "apexLineChart",
            component: () => import("./views/app/chart/apexLineChart"),
          },
          {
            path: "apexMixChart",
            component: () => import("./views/app/chart/apexMixChart"),
          },
          {
            path: "apexColumnChart",
            component: () => import("./views/app/chart/apexColumnChart"),
          },
          {
            path: "apexPieDonutsChart",
            component: () => import("./views/app/chart/apexPieDonutsChart"),
          },
          {
            path: "apexRadarChart",
            component: () => import("./views/app/chart/apexRadarChart"),
          },
          {
            path: "apexRadialBarChart",
            component: () => import("./views/app/chart/apexRadialBarChart"),
          },
          {
            path: "apexScatterChart",
            component: () => import("./views/app/chart/apexScatterChart"),
          },
          {
            path: "apexSparklineChart",
            component: () => import("./views/app/chart/apexSparklineChart"),
          },
        ],
      },
    ],
  },
  // sessions
  {
    path: "/sessions",
    component: () => import("./views/app/sessions"),
    redirect: "/sessions/signIn",

    children: [
      {
        path: "signIn",
        name: "signIn",

        component: () => import("./views/app/sessions/signIn"),
      },
      {
        path: "signUp",
        component: () => import("./views/app/sessions/signUp"),
      },
      {
        path: "forgot",
        component: () => import("./views/app/sessions/forgot"),
      },
      {
        path: "validate",
        name: "validate",
        component: () => import("./views/app/sessions/validate_account"),
      },
      {
        path: "reset_password",
        name: "reset_password",
        component: () => import("./views/app/sessions/reset_password"),
      },
    ],
  },

  {
    path: "/vertical-sidebar",
    component: () => import("./containers/layouts/verticalSidebar"),
  },
  {
    path: "*",
    component: () => import("./views/app/pages/notFound"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
