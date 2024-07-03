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
  <div class="container-fluid">
    <div class="row">
      <AppAside></AppAside>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3 overflow-auto h-100">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/generic';
@use './style/partials/variables' as *;

div.row{
  height: calc(100vh - $header-h);
}
</style>
