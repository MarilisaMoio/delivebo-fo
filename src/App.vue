<script>
 
  import AppDishes from './components/AppDishes.vue';
  import DishCard from './components/DishCard.vue';

  export default {
    components: {
      AppDishes,
      DishCard
    }
  }
</script>

<template>
  <main>
    <AppDishes></AppDishes>
    <DishCard></DishCard> 
  </main>
</template>

<style lang="scss">
@use './style/generic';


</style>
