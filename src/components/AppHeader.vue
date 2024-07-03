<script>
    export default{
        name: 'AppHeader'
    }
</script>

<template>
    <header class="navbar navbar-dark flex-md-nowrap p-2 shadow justify-content-space-between align-content-center">
        <div class="logo-deliveboo navbar-brand ms-md-3">
            <img src="../../public/delivebooLogo.svg" alt="" class="w-100">
        </div>
        <button class="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
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
}


</style>