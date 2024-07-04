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
  <div class="container-fluid">
    <div class="row">
      <main class="px-md-2 pt-3 overflow-auto h-100">
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
