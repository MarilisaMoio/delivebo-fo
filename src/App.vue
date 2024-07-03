<script>

  import AppHeader from './components/AppHeader.vue';
  import AppAside from "./components/AppAside.vue";

  export default {
    components: {
      AppHeader,
      AppAside,
    }

  }
</script>

<template>
  <AppHeader></AppHeader>
  <AppAside></AppAside>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './style/generic';
</style>
