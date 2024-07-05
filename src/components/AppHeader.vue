<script>
    export default{
        name: 'AppHeader'
    }
</script>

<template>
    <header class="navbar navbar-dark flex-md-nowrap p-2 shadow justify-content-space-between align-content-center">
        <div class="container">
            <div class="logo-deliveboo navbar-brand ms-md-3">
                <router-link :to="{ name: 'home' }">
                    <img src="../../public/delivebooLogo.svg" alt="" class="w-100">
                </router-link>
            </div>
            <div v-if="$route.name !== 'home'">
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-controls="offcanvasExample">
                    <i class="fa-solid fa-cart-shopping fs-4"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

header{
    background-color: $main_color;
    height: $header-h;
    img{
        height: 100%;
    }
    button{
        background-color: transparent;
        border: none;
        color: white
    }
}


</style>