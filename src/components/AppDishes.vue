<script>
import axios from 'axios';

export default {
  name: 'AppDishes',
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
    },

    getPhoto(photo) {    
  
      axios.get('http://127.0.0.1:8000/api/img', {
          params: {
              imgFile: photo
          },
          responseType: 'blob'
      })
      
      .then((response) => {    
  
        console.log(response);
        if(response.data instanceof Blob ) {
          console.log('dajeeeeeee')
        }      
        const thisurl =   URL.createObjectURL(response.data);
        console.log(thisurl);
        this.dishesUrl =   URL.createObjectURL(response.data);
        
      });    
  }
  },
  mounted() {
    this.getDishes();
    this.getPhoto();
  }
};
</script>

<template>
  
    <section>
        <div v-for="dish in dishes" class="card" style="width: 18rem;">
            <img :src="getPhoto(dish.dish_photo)" class="card-img-top" alt="...">
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


