<script>
    import {toRaw} from 'vue';
    import axios from 'axios';
    import { store } from '../store.js';
    import RestaurantCard from '../components/RestaurantCard.vue';
    
    export default{
        name: 'AppRestaurants',
        components:  {
          RestaurantCard
        },
        data(){
            return {
                restaurants: [],
                store
            };
        },
        methods: {
        getRestaurants() {
            axios.get(`http://127.0.0.1:8000/api/restaurants`)
            .then((response) => {
                this.restaurants = response.data.results;
                // console.log(response.data.results[0].types);
            });
        },
        ifArraysCoincide(types) {
         // console.log(types);
          let typeArray = [];
          // This transform a proxy array to a regular array
          let actualSearch = toRaw(store.selectedTypes);
          types.forEach(type => {
            typeArray.push(type.id);
          });
          typeArray.sort();
          store.selectedTypes.sort();
          // This to compare two arrays and returns if true or false
          // return JSON.stringify(actualSearch) == JSON.stringify(typeArray);
          return store.selectedTypes.every(type => typeArray.includes(type));
        }
    },
    mounted() {
        this.getRestaurants();
    }
}
</script>

<template>
    <div>
      <h2>Lista di Ristoranti</h2>
      <template v-if="store.selectedTypes.length == 0">
        <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant" ></RestaurantCard>
      </template>
      <template v-else>
      <template v-for="restaurant in restaurants">
        <RestaurantCard v-if="ifArraysCoincide(restaurant.types)" :restaurant="restaurant" ></RestaurantCard>
     </template>
      </template>
<!--       <ul>
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          {{ restaurant.restaurant_name }}
        </li>
      </ul> -->
    </div>
  </template>

<style scoped lang="scss">
  @use '../style/partials/variables' as *;

  div{
    background-color: $main_color;
  }

</style>
