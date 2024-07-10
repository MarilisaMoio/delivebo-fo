

<script>
import axios from 'axios';
import DishCard from "../components/DishCard.vue"
import AppBack from '../components/AppBack.vue';

export default {
  name: 'AppDishes',
  components: {
    DishCard,
    AppBack
  },
  data() {
    return {
      dishes: [],
      restaurant: {},
    };
  },
  methods: {
    getDishes() {
      axios.get(`http://127.0.0.1:8000/api/dishes?slug=${this.$route.params.slug}`)
        .then((response) => {
          this.dishes = response.data.results;
          this.restaurant = response.data.results[0].restaurant
          console.log(this.restaurant)
        })     
    }
  },
  mounted() {
    this.getDishes();
  }
};
</script>

<template>
  <section>
    <div class="container">
      <AppBack></AppBack>
      <div class="d-flex align-items-center restaurant-info mt-4">
        <div class="image-clipper me-4">
          <img v-if="restaurant.img !== null" class="h-100" :src="`http://127.0.0.1:8000/storage/${restaurant.img}`" :alt="restaurant.name">
          <img v-else src="../../public/defaultDishes.svg" class="card-img-top" alt="default-img">
        </div>
        <div>
          <h3>{{ restaurant.restaurant_name }}</h3>
          <span class="card-text d-inline-block me-3"><i class="fas fa-map-marker-alt"></i> {{ restaurant.address }}</span>
          <div class="contacts">
            <div>Per dubbi o domande sugli ingredienti contatta il ristorante:</div>
            <span class="card-text d-inline-block me-3"><i class="fas fa-phone-alt"></i> {{ restaurant.phone }}</span>
            <span class="card-text d-inline-block me-3"><i class="fas fa-envelope"></i> {{ restaurant.email }}</span>
          </div>
        </div>
      </div>
      <span>*Tutti i piatti contrassegnati con  <i class="fa-brands fa-envira"></i> sono vegetariani.</span>  
      <div class="d-flex flex-wrap gap-1 justify-content-center"> 
         <DishCard :class="'fade-in delay-'" v-for="dish in dishes" :dish="dish"></DishCard>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
  @use '../style/partials/variables' as *;
  
  //restaurant infos
  .image-clipper{
    width: clamp(145px, 30vw, 240px);
    min-width: 145px;
    overflow: hidden;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  h3{
    font-weight: 800;
    color: $main_color;
    margin-bottom: 0;
  }

  i{
    color: $main_color;
  }

  .contacts{
    margin-top: 10px;
  }

  .restaurant-info{
    border-bottom: 0.5px solid $main_color;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  
  
  //dish cards
  span {font-size: 14px;

  .fa-envira {
      color: green;
      font-size: 16px;
    }

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


