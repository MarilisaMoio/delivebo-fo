import { reactive } from "vue";

export const store = reactive({
    selectedTypes: [],
    //variabili per il carrello
    currentRestaurant: null,
    totalPrice: 0,
    currentCart: [],
    
});

parseFloat(localStorage.getItem('total')) ? store.totalPrice = parseFloat(localStorage.getItem('total')) : store.totalPrice = 0;
store.currentRestaurant = parseInt(localStorage.getItem('restaurant'));
JSON.parse(localStorage.getItem('cart')) ? store.currentCart = JSON.parse(localStorage.getItem('cart')) : store.currentCart = [];

/* Il comando qui sotto serve per pulire il browser da ciò che salviamo in local storage. NON CANCELLARLO */
//localStorage.clear();
