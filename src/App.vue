<script>
  import AppHeader from './components/AppHeader.vue';

  export default {
    components: {
      AppHeader,
    }

  }
</script>

<template>
  <AppHeader></AppHeader>
  <main class="overflow-auto">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './style/generic';
@use './style/partials/variables' as *;

  main{
    min-height: calc(100vh - $header-h);
    background-color: whitesmoke;
  }

</style>
