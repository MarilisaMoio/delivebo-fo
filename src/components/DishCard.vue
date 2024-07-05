<script>
import { store } from '../store.js'

export default {
  name: 'DishCard',
  props: {
    dish: Object,
    store,
  },
  data() {
    return {
      showModal: false
    }

  },
  methods: {
    insertDishInCart(dish){
      // console.log(store.currentRestaurant);
      if(store.currentRestaurant && store.currentRestaurant !== dish.restaurant_id) {
        this.showModal = true;
      } else {

        console.log('ConsoleLog per il piatto', dish)
  
        if(!store.currentRestaurant){
          store.currentRestaurant = dish.restaurant_id;
        }
        console.log(store.currentRestaurant);
        let flag = false;
        let selectedDish = null;
  
        //se il carrello non è vuoto
        if(store.currentCart.length !== 0){
          //controlla tutti gli elementi nel carrello e verifica se il dish già esiste
          store.currentCart.forEach((cartElement, index) => {
            console.log('consolelog per l\'elemento in carrello', cartElement.dishInfo)
            //se esiste allora aumenta la quantità di quel dish
            if(cartElement.dishInfo.id == dish.id){
                flag = true;
                cartElement.quantity++
            }
            console.log('quantità in carrello', cartElement.quantity)        
          })
          //se non è stato trovato nessun doppione, inserisci il piatto
          if(!flag){
              selectedDish = {
              quantity: 1,
              dishInfo: dish
            }
            store.currentCart.push(selectedDish)
          }
        //se invece il carrello è vuoto inserisci direttamente il piatto
        } else {
          selectedDish = {
          quantity: 1,
          dishInfo: dish
          }
          store.currentCart.push(selectedDish)
        }
  
        console.log(store.currentCart);
        this.saveCart();
      }
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    emptyCart(dish) {
      store.currentCart = [];
      store.currentRestaurant = this.dish.restaurant_id;
      this.toggleModal();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(store.currentCart));
      localStorage.setItem('restaurant', store.currentRestaurant);
    },
  },
  mounted() {
    console.log(store.currentCart);
    console.log(store.currentRestaurant);
  }
      }
</script>

<template>
  <div class="dish-card-container">
    <div class="card d-flex justify-content-between">
      
        <div class="dish-image-container p-3">
          <img v-if="dish.dish_photo !== null" :src="`http://127.0.0.1:8000/storage/${dish.dish_photo}`" class="card-img-top" alt="...">
          <img v-else src="../../public/defaultDishes.svg" class="card-img-top" alt="...">
        </div>
        
  
      <div class="dish-details-container d-flex flex-column justify-content-between">
          <div><b>{{dish.dish_name}}</b></div> <i v-if="dish.is_vegetarian" class="fa-brands fa-envira"></i>     
          <div class="price">{{ dish.price }}€</div>          
      <div>
        <div class="description p-3">{{dish.description}}</div>
        <div class="fst-italic" v-if="!dish.description">NESSUNA DESCRIZIONE DISPONIBILE</div> 
      </div>
    
      <div class="d-flex justify-content-center mb-2">
        <button @click="insertDishInCart(dish)" class="button-19" role="button">AGGIUNGI <i class="fa-solid fa-cart-plus"></i></button> 
      </div>
    </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-bind="$attrs" :class="['modal', { 'd-block': showModal }]" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Attenzione! Stai cambiando ristorante</h5>
        </div>
        <div class="modal-body">
          <p>Procedendo con l'aggiunta di questo piatto, il carrello si svuoterà. Vuoi procedere?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="toggleModal">No</button>
          <button type="button" class="btn btn-primary" @click="emptyCart(dish), insertDishInCart(dish)">Aggiungi il nuovo piatto</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Overlay per oscurare il resto della pagina -->
  <div v-if="showModal" class="modal-backdrop show"></div>
</template>

<style scoped lang="scss">
  @use '../style/partials/variables' as *;

  .dish-card-container {
    width: 320px;
    margin: 40px;
  }

  .card {
    height: 420px;
    border-radius: 28px;
    background-color: rgba($main_color, 0.3); 
    box-shadow: 0 6px 10px rgba(0, 0, 0, 1);
    text-align: center;
    position: relative;
  
    .dish-content-container {
      min-height: 160px;
    }

    .dish-image-container {
     
      img {
        width: 160px;
        height: 160px;
        border-radius: 10px;
        border: 2px solid $main_color;   
      }
    }

    .dish-details-container {
      height: 70%;
      border-radius: 20px;
      background-color: white;
     
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
  background-color: rgb(255, 89, 0);
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 8px 10px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 50%;
}

.button-19:after {
  background-clip: padding-box;
  background-color: rgb(255, 123, 0);
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
