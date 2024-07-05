
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
            <h5 class="offcanvas-title" id="cart-title">Carrello</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>