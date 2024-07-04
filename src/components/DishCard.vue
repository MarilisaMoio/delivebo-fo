<script>
export default {
  name: 'DishCard',
  props: {
    dish: Object
  }
}
</script>

<template>

    <div class="card" style="width: 18rem;">
      <img v-if="dish.dish_photo !== null" :src="`http://127.0.0.1:8000/storage/${dish.dish_photo}`" class="card-img-top" alt="...">
      <img v-else src="../../public/defaultDishes.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{dish.dish_name}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <btn @click="getPhoto(dish.dish_photo)" class="btn btn-primary">Go somewhere</btn>
      </div>
    </div>
 
</template>

<style scoped lang="scss">
</style>
