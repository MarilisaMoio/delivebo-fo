

<script>
import axios from 'axios';
import DishCard from "../components/DishCard.vue"

export default {
  name: 'AppDishes',
  components: {
    DishCard,
  },
  data() {
    return {
      dishes: [],
      dishesUrl: ""
    };
  },
  methods: {
    getDishes() {
      axios.get('http://127.0.0.1:8000/api/dishes?slug=sakura')
        .then((response) => {
          this.dishes = response.data.results;
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
      <span>*Tutti i piatti contrassegnati con  <i class="fa-brands fa-envira"></i> sono privi di carne animale. </span>  
      <div class="d-flex flex-wrap gap-1 justify-content-center"> 
         <DishCard :class="'fade-in delay-'" v-for="dish in dishes" :dish="dish"></DishCard>
      </div>
    </section>

</template>

<style scoped lang="scss">
 @use '../style/partials/variables' as *;


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


