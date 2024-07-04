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
  <main class="overflow-auto h-100">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './style/generic';
@use './style/partials/variables' as *;

div.row{
  height: calc(100vh - $header-h);
}
</style>
