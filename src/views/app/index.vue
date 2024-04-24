<template>
  <div>
    <!-- <keep-alive> -->
    <component :is="getThemeMode.layout"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
  methods: {},
};
</script>
