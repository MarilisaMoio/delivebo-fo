<script>
export default {
    name: 'AppBack',
}
</script>

<template>
    <router-link class="ms-color d-flex align-items-center my-3" :to="{name: 'restaurants'}"
      >
        <i class="fa-solid fa-arrow-left fs-5"></i>
        <small class="px-2 fw-bold">Torna ai ristoranti</small>
    </router-link>
</template>

<style scoped lang="scss">
.ms-color {
    color: rgb(126, 134, 134);
    text-decoration: none;
}
</style>