<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default{
        name: 'AppChecks',
        data(){
            return {
                foodTypes: [],
                store
            }
        },
        methods: {
            getTypes() {
                axios.get('http://127.0.0.1:8000/api/types')
                .then((response => {
                    this.foodTypes = response.data.results;
                }))
            }
        },
        mounted(){
            this.getTypes();
        }

    }
</script>

<template>
    <nav>
        <div class="pt-3">
            <div>Filtra i ristoranti:</div>
            <div class="form-check form-switch d-inline-block ms-margin-start" v-for="foodType in foodTypes">
                <input class="form-check-input custom-color-switch" type="checkbox" role="switch" :value="foodType.id" id="" v-model="store.selectedTypes">
                <label class="form-check-label" for=""> {{ foodType.type_name }}</label>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    nav{
        margin-bottom: 20px;
    }

    .custom-color-switch{
        &:focus{
            box-shadow: none;
        }
        &:checked {
        background-color: $main_color;
        border-color: $main_color;
        }   
    }

    //controlla il responsive!
    .ms-margin-start + .ms-margin-start{
        margin-left: 40px
    }

</style>