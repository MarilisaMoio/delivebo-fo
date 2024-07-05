<script>
export default {
  name: 'DishCard',
  props: {
    dish: Object
  }
}
</script>

<template>
  <div class="dish-card-container">
    <div class="card p-4 d-flex justify-content-between">
     
      <div class="d-flex dish-content-container">
        
        <div class="dish-image-container">
          <img v-if="dish.dish_photo !== null" :src="`http://127.0.0.1:8000/storage/${dish.dish_photo}`" class="card-img-top" alt="...">
          <img v-else src="../../public/defaultDishes.svg" class="card-img-top" alt="...">
        </div>
    
       <div class="dish-details-container d-flex flex-column justify-content-evenly">
          <div><b>{{dish.dish_name}}</b></div>
          <div class="price">{{ dish.price }}€</div>      
        </div>

      </div>
      
      <div>
        <div class="description">{{dish.description}}</div>
        <div class="fst-italic" v-if="!dish.description">NESSUNA DESCRIZIONE DISPONIBILE</div>  
      </div>
      

      <div class="d-flex justify-content-between">
        <button class="button-19" role="button">AGGIUNGI</button>
        <i v-if="dish.is_vegetarian" class="fa-brands fa-envira"></i>  
      </div>
     
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '../style/partials/variables' as *;

  .dish-card-container {
    width: 300px;
    margin: 40px;
  }

  .card {
    height: 360px;
    border-radius: 28px;
    background-color: rgba($main_color, 0.3); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
    text-align: center;
    position: relative;
  
    .dish-content-container {
      min-height: 160px;
    }

    .dish-image-container {
      position: absolute;
      left: -30px;
      top: 30px;

      img {
        width: 160px;
        height: 160px;
        border-radius: 10px;
        border: 2px solid $main_color;   
      }
    }

    .dish-details-container {
      height: 70%;
      margin-left: 50%;
      margin-top: 10px;

      h5 {
        font-size: 12px;
      }

      .price {
        color: #e74c3c; 
        font-size: 1.4em; 
        font-weight: bold; 
         margin: 10px 0; 
      }

  
    }
    .description{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      }

    .fa-envira {
      color: green;
      font-size: 26px;
    }
  }

  .card:hover {
    transform: scale(1.1);
    border: 3px solid $main_color;
    transition: transform 0.7s;
}

/* BOTTONE FROM WEBBBBBB */
.button-19 {
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 60%;
}

.button-19:after {
  background-clip: padding-box;
  background-color: #1CB0F6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19:main,
.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}

.button-19:active {
  border-width: 4px 0 0;
  background: none;
}

</style>
