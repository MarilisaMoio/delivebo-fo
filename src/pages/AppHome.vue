<script>
    export default {
        name: 'AppHome',
    }
</script>

<template>
    <section class="hero d-flex">
        <div class="pippo text-center">
            <h1 class="text-white ms-margin">Qualcosa tipo non lo so</h1>
            <button class="ms-btn button">  
                <router-link class="ms-decoration-none text-white" :to="{ name: 'restaurants'}">Ecco qui tutti i migliori ristoranti di Rovello Porro!</router-link>
            </button>
        </div>
    </section>
    <div class="container ms-bg p-0 ">
        <section class="map">
            <div>
                
            </div>
        </section>
    </div>
    <section class="button">
    </section>
</template>


<style scoped lang="scss">
   @use '../style/partials/variables' as *;
   .hero{
        background-image: url('../assets/wallpaperflare.com_wallpaper.jpg');
        height: 750px;
        width: 100%;
        background-size: cover;
        background-position: bottom;
        position: relative;
        margin-bottom: 90px;
   }
   .pippo{
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
   }
   .ms-margin{
    margin-bottom: 150px;
   }
   .button{
       transition: 0.4s;
    &:hover{
        transform: scale(1.2);
    }
}
.ms-btn{
    padding: 20px 24px;
    background-color: $main_color;
    border-radius: 15px;
    text-decoration: none;
}
   .ms-bg{
    box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.05);
    -webkit-box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.05);
       .map{
            background-image: url('../assets/maps-rovello.png');
            height: 500px;
            width: 100%;
            background-size: cover;
            background-position: center;
            position: relative;
       }
   }
   .ms-decoration-none{
    text-decoration: none;
   }
</style>