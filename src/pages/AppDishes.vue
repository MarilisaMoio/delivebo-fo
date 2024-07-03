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
      axios.get('http://127.0.0.1:8000/api/dishes?restaurant=14')
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
      <DishCard v-for="dish in dishes" :dish="dish"></DishCard>
    </section>
</template>

<style scoped lang="scss">
</style>


