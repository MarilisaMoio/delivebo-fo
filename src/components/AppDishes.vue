<script>
import axios from 'axios';

export default {
  name: 'AppDishes',
  data() {
    return {
      dishes: []
    };
  },
  methods: {
    getDishes() {
      axios.get('http://127.0.0.1:8000/api/dishes?restaurant=14')
        .then((response) => {
          this.dishes = response.data.results;
        })     
    }

    // getPhoto(photo) {
            
    //         axios.get('http://127.0.0.1:8000/api/', {
    //             params: {
    //                 imgFile: photo
    //             }
    //         })

    //         .then((response) => {
    //             this.projects = response.data.results.data;

    //         });
    //     }
    
    
  },
  mounted() {
    this.getDishes();
  }
};
</script>

<template>

    
    <section>
        <div v-for="dish in dishes" class="card" style="width: 18rem;">
            <img :src="dish.dish_photo" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">{{dish.dish_name}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    </section>
   

 
</template>

<style scoped lang="scss">
</style>


