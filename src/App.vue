<template>
  <div>
    <router-view></router-view>

    <customizer></customizer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      xmppConnectionDetails:
        JSON.parse(sessionStorage.getItem("xmppConnectionDetails")) || null,
      presence: "online",
    };
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
    themeName() {
      return this.getThemeMode.dark ? "dark-theme" : " ";
    },
    rtl() {
      return this.getThemeMode.rtl ? "rtl" : " ";
    },
  },

  methods: {
    // reconnect if  the page is loaded from the cache  or if the connection is lost

    ...mapActions(["updatePresence"]),

    updateUserPresence() {
      this.updatePresence(this.presence);
    },
    handleVisibilityChange() {
      if (document.hidden) {
        this.updatePresence("away"); // or 'offline'
      } else {
        this.updatePresence("online");
      }
    },
  },
  created() {
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  },
  beforeDestroy() {
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange
    );
  },
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "Gull",
      // all titles will be injected into this template
      titleTemplate: "%s | TIOT",
      bodyAttrs: {
        class: [this.themeName, "text-left"],
      },
      htmlAttrs: {
        dir: this.rtl,
      },
    };
  },
  mounted() {
    this.updateUserPresence();
  },
};
</script>

<style></style>
