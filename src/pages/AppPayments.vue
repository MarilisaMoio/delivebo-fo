<script>
import { store } from '../store.js'
import AppBack from '../components/AppBack.vue';
import axios from 'axios';

export default {
    name: 'AppPayments',
    components: {
        AppBack
    },
    data(){
        return {
            store,
            validated: false,
            client_name: "",
            surname: "",
            address: "",
            email: "",
            cell: "",
            clientToken: "",
        }
    },
        methods: {
        getBraintree(){
            var button = document.querySelector('#submit-button');
            const self = this;
            braintree.dropin.create({
                authorization: this.clientToken,
                selector: '#dropin-container'
            }, function (err, instance) {
                button.addEventListener('click', function () {
                    instance.requestPaymentMethod(function (err, payload) {
                        if(err){
                            console.error(err);
                            return
                        }
                        //errore manuale della carta 4000 1111 1111 1115
                        if(payload.details.bin == "400011"){
                            self.$router.push({ name: 'orderfail' });
                            return;
                        }
                            // Submit payload.nonce to your server
                        axios.post('http://127.0.0.1:8000/api/orders', {
                            params: {
                                client_name: self.client_name,
                                client_surname: self.surname,
                                phone: self.cell,
                                email: self.email,
                                address: self.address,
                                total: store.totalPrice,
                                restaurant_id: store.currentRestaurant,
                                cart: store.currentCart
                            }
                        }).then((response) =>{
                            store.currentRestaurant = null;
                            store.currentCart = [];
                            store.totalPrice = 0;
                            localStorage.clear();

                            self.$router.push({ name: 'ordersuccess' });
                        });
                    });
                })
            })
        },
        validateForm(){
            let form = document.getElementById('userForm');
            this.validated = form.checkValidity();
        },
        getToken(){
            axios.get('http://127.0.0.1:8000/token')
            .then((response) => {
                this.clientToken = response.data.token;
                this.getBraintree();
            })
        },
    },
    mounted(){
        this.getToken();
    }
}
</script>

<template>
    <div class="container mt-5">
        <AppBack></AppBack>
        <template v-if="store.currentCart.length > 0">
        <h1>Controlla il tuo ordine da {{ store.currentCart[0].dishInfo.restaurant.restaurant_name }}</h1>
        <div class="row">
            <!-- SECTION SISTEMA DI PAGAMENTO -->
            <div class="col-md-6">
                <div class="order-summary">
                    <h3 class="mt-3">Dettagli della consegna</h3>
                    <div class="delivery-option d-flex align-items-center">
                        <i class="fa-solid fa-bicycle"></i>
                        Consegna fra 35 - 65 min
                    </div>

                     <!-- Form dati utente -->

                    <h3 class="mt-4">Informazioni per la consegna</h3>
                     <form class="ms-form" id="userForm">
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="client_name">Nome<span class="asterisk">*</span></label>
                                <input type="text" id="client_name" name="client_name" v-model="client_name" @keyup="validateForm()" required>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="surname">Cognome<span class="asterisk">*</span></label>
                                <input type="text" id="surname" name="surname" v-model="surname" @keyup="validateForm()" required>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="address">Indirizzo<span class="asterisk">*</span></label>
                                <input type="text" id="address" name="address" v-model="address" @keyup="validateForm()" required>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="email">Email<span class="asterisk">*</span></label>
                                <input type="email" id="email" name="email" v-model="email" @keyup="validateForm()" required>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="cell">Cellulare<span class="asterisk">*</span></label>
                                <input type="text" id="cell" name="cell" v-model="cell" inputmode="numeric" pattern="\d{10}" @keyup="validateForm()" required>
                            </div>
                        </div>
                    </form>

                    <!-- Braintree drop-in -->
                    <div id="dropin-container"></div>
                    <button id="submit-button" class="button button--small button--green" :disabled=!validated>Procedi all'ordine</button>

                </div>
            </div>

            <!-- SECTION CARRELLO -->
            <div class="col-md-6 order-first order-md-last">
                <div class="cart-summary bg-light p-3 mt-4 mt-md-0 rounded">
                    <h2>Carrello</h2>
                    <div v-for="dish in store.currentCart" class="cart-item d-flex justify-content-between">
                        <span><span>x{{ dish.quantity }}</span> {{ dish.dishInfo.dish_name }}</span>
                        <span>{{ parseFloat(dish.dishInfo.price * dish.quantity).toFixed(2) }}€</span>
                    </div>
                    <div class="cart-item d-flex justify-content-between">
                        <span>Spese di consegna</span>
                        <span>Gratuito</span>
                    </div>
                    <div class="promo-box bg-purple text-white p-2 mt-3 rounded">
                        Hai risparmiato 1,38 € con Deliveboo
                    </div>
                    <div class="cart-item d-flex justify-content-between mt-2">
                        <strong>Totale</strong>
                        <strong>{{ parseFloat(store.totalPrice).toFixed(2) }}€</strong>
                    </div>
                </div>
            </div>
        </div>
        </template>
        <template v-else>
            <div class="d-flex justify-content-center mt-5">
                <h1 class="fw-bold fs-1 margin-auto ms-width text-center">Non è stato ancora inserito nessun piatto nel carrello, torna ai ristoranti per poter procedere con l'acquisto.</h1>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-form {
    min-width: 100%;
  
    label{       
        width: 30%;
    }
    input{
        width: 70%;
    }
}


.payment-icons img {
    height: 37px;
}

.promo-box.bg-purple {
    background-color: $main_color;
}

.delivery-option {
    font-size: 20px;
    gap: 10px;
}

.paypal-link {
    height: 40px;
}

.order-button {
    background-color: $main_color; 
    color: #ffff; 
    border: none; 
    padding: 10px 20px; 
    font-size: 20px;
    transition: background-color 0.3s ease; 
}

.order-button:hover {
    background-color: #9400cb; 
}

.payment-option input[type="radio"].form-check-input {
    border-color: #ccc; 
    background-color: #fff; 
    &:checked {
        border-color: $main_color; 
        background-color: rgb(32, 185, 167); 
    }
}

.restaurant-image img {
    max-width: 29%;
    height: auto; 
    border-radius: 20px;
}

//Braintree
.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: $main_color;
  border-color: $main_color;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #169280;
  color: white;
}

button:disabled{
    background-color: gray;
    border-color: gray;
    &:hover{
        background-color: gray;
        border-color: gray;
    }
}

//form
.asterisk{
    color: $main_color
}

form{
    max-width: 500px;
    & input{
        border: 1px solid rgb(168, 184, 185);
        margin-top: 0;
        width: 300px;
    }
    & input:focus{
        outline-color: $main_color;
    }
    & * + *{
        margin-top: 10px;
    }
    input:invalid {
        border-color: red;
    }   
}

.ms-width{
    max-width: 700px;

}
</style>