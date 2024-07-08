<script>
export default {
    name: 'AppPayments',
}
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <!-- SECTION SISTEMA DI PAGAMENTO -->
            <div class="col-md-6 order-md-1">
                <div class="order-summary">
                    <h1>Controlla il tuo ordine da Panda</h1>

                    <!-- IMAGINE DI OGNI RISTORANTE -->
                    <div class="restaurant-image my-3">
                        <!-- <img src="/src/assets/sombrero-loco.jpg" alt="Restaurant Image" class="img-fluid rounded"> -->
                    </div>

                    <h2>Come vuoi pagare?</h2>

                    <!-- ACCORDEON PER IL FORM DELLA CARD -->
                    <div class="payment-option form-check">
                        <input class="form-check-input" type="radio" name="payment" value="card" id="card" data-bs-toggle="collapse" data-bs-target="#cardCollapse" aria-expanded="false" aria-controls="cardCollapse">
                        <label class="form-check-label" for="card">
                            Paga con carta di debito o credito
                            <span class="payment-icons ml-2">
                                <img src="/src/assets/mastercard_pay.png" alt="Mastercard" class="mr-2">
                                <img src="/src/assets/visacard_pay.png" alt="Visa">
                            </span>
                        </label>
                    </div>

                    <!-- CONTENUTO PER AL'ACCCORDEON PER LA CARD -->
                    <div id="cardCollapse" class="collapse" aria-labelledby="card" data-bs-parent=".order-summary">
                        <div class="card-body">
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, iste ratione at rem, tenetur magni, 
                                libero officia natus possimus distinctio obcaecati deleniti fugit accusantium asperiores voluptate 
                                consequuntur perferendis saepe ab?Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, 
                                aliquam voluptates sed, eos placeat accusantium distinctio praesentium quas libero voluptas pariatur.
                                Aliquam error reiciendis quia eius unde molestias cum illo!Lorem
                            </div>
                        </div>
                    </div>

                    <!-- ACCORDEON PER IL FORM DELLA CARD PAYPAL -->
                    <div class="payment-option form-check">
                        <input class="form-check-input" type="radio" name="payment" value="paypal" id="paypal" data-bs-toggle="collapse" data-bs-target="#paypalCollapse" aria-expanded="false" aria-controls="paypalCollapse">
                        <label class="form-check-label" for="paypal">
                            PayPal
                            <img src="/src/assets/paypal_pay.png" alt="PayPal" class="ml-2">
                        </label>
                    </div>

                    <!-- CONTENUTO PER L'ACCORDEO DE LA CARD PAYPAL -->
                    <div id="paypalCollapse" class="collapse " aria-labelledby="paypal" data-bs-parent=".order-summary">
                        <div class="card-body">
                            <a href=""><img src="/src/assets/link_paypal.png" alt="PayPal Link" class="paypal-link rounded"></a>
                        </div>
                    </div>

        

                    <h2 class="mt-3">Dettagli della consegna</h2>
                    <div class="delivery-option d-flex align-items-center">
                        <i class="fa-solid fa-bicycle"></i>
                        Consegna fra 35 - 65 min... o mai
                    </div>

                    <h2 class="mt-4">Indirizzo di consegna</h2>
                    <div class="add-button text-primary mt-2">+ Aggiungi un nuovo indirizzo</div>

                    <div class="checkbox-option form-check mt-3">
                        <input class="form-check-input" type="checkbox" id="posate">
                        <label class="form-check-label" for="posate">Spunta se vuoi le posate</label>
                    </div>

                    <div class="checkbox-option form-check mt-3">
                        <input class="form-check-input" type="checkbox" id="promo">
                        <label class="form-check-label" for="promo">Spunta la casella se preferisci non ricevere offerte  via e-mail da Deliveboo.</label>
                    </div>

                    <button class="order-button btn btn-block mt-4">Ordina per la consegna!!!!!!!!!</button>
                </div>
            </div>

            <!-- SECTION CARRELLO -->
            <div class="col-md-6 order-md-2">
                <div class="cart-summary bg-light p-3 mt-4 mt-md-0 rounded">
                    <h2>Carrello</h2>
                    <div class="cart-item d-flex justify-content-between">
                        <span>4x Gyoza</span>
                        <span>23,20 €</span>
                    </div>
                    <div class="cart-item d-flex justify-content-between">
                        <span>1x Coca - Cola</span>
                        <span>2,90 €</span>
                    </div>
                    <div class="cart-item d-flex justify-content-between">
                        <span>Subtotale</span>
                        <span>26,10 €</span>
                    </div>
                    <div class="cart-item d-flex justify-content-between">
                        <span>Spese di servizio</span>
                        <span>1,57 €</span>
                    </div>
                    <div class="cart-item d-flex justify-content-between">
                        <span>Spese di consegna</span>
                        <span>Gratuito</span>
                    </div>
                    <div class="promo-box bg-purple text-white p-2 mt-3 rounded">
                        Risparmia 0,38 € con Deliveboo
                    </div>
                    <div class="cart-item d-flex justify-content-between mt-2">
                        <strong>Totale</strong>
                        <strong>27,67 €</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

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
</style>