
<script>
    import { store } from '../store.js';

    export default{
        name: 'AppOffcanvas',
        data(){
            return {
                store,
            }
        }
    }
</script>

<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="cart">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="cart-title">Il tuo ordine</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="d-flex justify-content-between">
                <h4>Carrello</h4>
                <i class="fa-solid fa-cart-shopping fs-3"></i>
            </div>
            <div v-if="store.currentCart.length > 0">
                <div class="mb-3">Nome ristorante</div>
                <!-- Singol product type -->
                <div>
                    <div>
                        <div class="mb-2">Nome piatto </div>
                        <div class="mb-2">Quantita</div>
                        <div class="mb-2">Prezzo singolo</div>
                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-between">
                        <div>Subtotale</div>
                        <div>[prezzo subtotale]</div>
                    </div>
                </div>
                <!--/ Singol product type -->
                <!-- Total price and button to payment page -->
                <div class="mt-4">
                    <div class="d-flex justify-content-between">
                        <div>Totale dell'ordine</div>
                        <div>[cifra totale]</div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <!-- TO DO completare rotta  --><router-link  class="btn btn-primary" :to="{name:''}">Vai al pagamento</router-link>
                    </div>
                </div>
            </div>
            <div class="mt-3" v-else>Il tuo carrello è vuoto!</div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;


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