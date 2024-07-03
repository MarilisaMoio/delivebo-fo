<script>
    import axios from 'axios';

    export default{
        name: 'AppAside',
        data(){
            return {
                foodTypes: []
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
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
        <div class="position-sticky pt-3">
            <form>
                <div class="form-check form-switch ms-4 mb-2" v-for="foodType in foodTypes">
                    <input class="form-check-input custom-color-switch" type="checkbox" role="switch" value="{{ foodType.type_name }}" id="">
                    <label class="form-check-label" for=""> {{ foodType.type_name }}</label>
                </div>
            </form>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    nav{
        position: relative;
        height: calc(100vh - $header-h);
        border-right: 1px solid $main_color;
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

</style>