
<script>
    import { store } from '../store.js';
    import * as bootstrap from 'bootstrap';

    export default{
        name: 'AppOffcanvas',
        data(){
            return {
                store,
            }
        },
        methods: {
           decreaseQuantity(index, dish) {
            if(store.currentCart[index].quantity == 1){
                store.currentCart.splice(index, 1);
                console.log('Elemento eliminato');
                store.totalPrice = (store.totalPrice - parseFloat(dish.dishInfo.price));
                if(store.currentCart.length == 0){
                    store.currentRestaurant = null;
                }
            }else{
                store.currentCart[index].quantity--;
                store.totalPrice = (store.totalPrice - parseFloat(dish.dishInfo.price));
            }
            this.saveCart()
            
           },
           increaseQuantity(index, dish){
            store.currentCart[index].quantity++;
            store.totalPrice = (store.totalPrice + parseFloat(dish.dishInfo.price))
            this.saveCart()
           },
            saveCart() {
                localStorage.setItem('total', store.totalPrice)
                localStorage.setItem('cart', JSON.stringify(store.currentCart));
                localStorage.setItem('restaurant', store.currentRestaurant);
            },
            closeOffcanvas() {
                const offcanvasElement = document.getElementById('cartOffcanvas');
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (bsOffcanvas) {
                    bsOffcanvas.hide();
                }
                setTimeout(() => {
                    this.$router.push({ name: 'payments' });
                }, 200);
            },   
        }
    }
</script>

<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="cartOffcanvas">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="cart-title">Il tuo ordine</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="d-flex justify-content-between">
                <h4>Carrello</h4>
                <i class="fa-solid fa-cart-shopping fs-3 ms-color"></i>
            </div>
            <div v-if="store.currentCart.length > 0">
                <div class="mb-4 fw-bold fs-4 "> {{ store.currentCart[0].dishInfo.restaurant.restaurant_name }}</div>
                <!-- Single product type -->
                <div>
                    <div class="mb-4 ms-border" v-for="singleItem, index in store.currentCart">
                        <div class="mb-2 fw-bold ms-color">{{ singleItem.dishInfo.dish_name }} </div>
                        <div class="d-flex justify-content-between">
                            <div class="mb-2">Prezzo singolo:</div>
                            <div>{{ singleItem.dishInfo.price }} €</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="mb-2">Quantità:</div>
                            <div class="d-flex justify-content-end gap-3">
                                <span @click="this.decreaseQuantity(index, singleItem)" class="ms-hover"><i class="fa-solid fa-minus"></i></span>
                                <div> {{ singleItem.quantity }}</div>
                                <span @click="increaseQuantity(index, singleItem)" class="ms-hover"><i class="fa-solid fa-plus"></i></span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mb-3 fw-bold">
                            <div>Subtotale:</div>
                            <div>{{ parseFloat(singleItem.dishInfo.price * singleItem.quantity) }} €</div>
                        </div>
                    </div>
                </div>
                
                <!--/ Single product type -->
                <!-- Total price and button to payment page -->
                <div class="mt-4">
                    <div class="d-flex justify-content-between fw-bold">
                        <div>Totale dell'ordine</div>
                        <div>{{ store.totalPrice }} €</div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <!-- TO DO completare rotta  -->
                        <button class="btn btn-primary" @click.native="closeOffcanvas()">Vai al pagamento</button>
                        
                    </div>
                </div>
            </div>
            <div class="mt-3" v-else>Il tuo carrello è vuoto!</div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-color {
    color: $main_color;
}

.ms-border {
    border-bottom: 1px solid $main_color;
}

.ms-hover {
    &:hover {
        cursor: pointer;
    }
}

.btn-primary {
  margin-top: 25px;
  display: inline-block;
  background-color: #00ccbc;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.5s ease;
  border: none;
}

.btn-primary:hover {
  background-color: #169280;
}

</style>