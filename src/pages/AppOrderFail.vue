<script>
    export default{
        name: 'AppOrderFail'
    }
</script>

<template>
    <div class="container">
        <AppBack></AppBack>
        <div>
            <div class="border-0 rounded-lg my-5">
                <div class="card-body p-5">
                    <div class="text-center mb-4">
                        <div class="check-circle">
                            <i class="fa-solid fa-xmark text-white"></i>
                        </div>
                        <h3 class="mb-3">IL PAGAMENTO NON È ANDATO A BUON FINE</h3>
                        <p class="text-muted">Ti chiediamo di ritentare con un nuovo metodo di pagamento.</p>
                        <button class="btn ms-color">
                            <router-link class="ms-decoration-none text-white" :to="{ name: 'payments'}">Torna al checkout</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.check-circle {
    width: 100px;
    height: 100px;
    background-color: red; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    & i{
        font-size: 65px;
    } 
  }

.ms-color{
    background-color: $main_color;
}

.ms-decoration-none{
    text-decoration: none;
}
</style>