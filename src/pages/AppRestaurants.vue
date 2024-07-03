<script>
    import axios from 'axios'
    
    export default{
        name: 'AppRestaurants',
        data(){
            return {
                restaurants: []
            };
        },
        methods: {
        getRestaurants() {
            axios.get(`http://127.0.0.1:8000/api/restaurants`)
            .then((response) => {
                this.restaurants = response.data.results;
            });
        }
    },
    mounted() {
        this.getRestaurants();
    }
}
</script>

<template>
    <div>
      <h2>Lista di Restauranti</h2>
      <ul>
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          {{ restaurant.restaurant_name }}
        
        </li>
      </ul>
    </div>
  </template>

<style scoped lang="scss">
  @use '../style/partials/variables' as *;

  div{
    background-color: $main_color;
  }

</style>
