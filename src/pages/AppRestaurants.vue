<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import RestaurantCard from '../components/RestaurantCard.vue';
    import AppChecks from "../components/AppChecks.vue"
    
    export default{
        name: 'AppRestaurants',
        components:  {
          RestaurantCard,
          AppChecks
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
            });
        },
        ifArraysCoincide(types) {
         // console.log(types);
          let typeArray = [];
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
        console.log(store.currentCart);
        console.log(store.currentRestaurant);
    }
}
</script>

<template>

  <div class="restaurant-list">

    <div class="container">
      <AppChecks></AppChecks>
      <div class="row restaurant-flex">
        <template v-if="store.selectedTypes.length == 0">
          <div v-for="(restaurant, index) in restaurants" :key="restaurant.id" class="col-12 col-lg-4 mb-4 col-xxl-3 col-md-6 align-content-stretch h-ms">
            <RestaurantCard :restaurant="restaurant" :class="'fade-in delay-' + index"></RestaurantCard>
          </div>
        </template>
        <template v-else>
          <template v-for="(restaurant, index) in restaurants">
            <div v-if="ifArraysCoincide(restaurant.types)" :key="restaurant.id" class="col-12 col-lg-4 mb-4 col-xxl-3 col-md-6 align-content-stretch h-ms">
              <RestaurantCard :restaurant="restaurant" :class="'fade-in delay-' + index"></RestaurantCard>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '../style/partials/variables' as *;

  .restaurant-list {
    padding: 20px 0;
  }

  .restaurant-flex {
    display: flex;
    flex-wrap: wrap;
  }

  .h-ms{
    max-height: 530px;
  }

  // ANIMATION FOR THE CARDS
  @keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@for $i from 0 through 20 {
  .delay-#{$i} {
    animation-delay: #{$i * 0.1}s;
  }
}
</style>