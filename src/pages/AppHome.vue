<script>
    export default {
        name: 'AppHome',
    }
</script>

<template>
    <section class="hero d-flex">
        <div class="pippo text-center">
            <h1 class="text-white ms-margin fw-bold ms-main-title">Il Bello è Prenderci Gusto!</h1>
            <button class="ms-btn button">  
                <router-link class="ms-decoration-none text-white" :to="{ name: 'restaurants'}"><span class="fs-6 fw-light">Ecco qui i migliori ristoranti di Rovello Porro!</span></router-link>
            </button>
        </div>
    </section>
    <div class="container p-0">
        <section class="map ms-bg d-flex">
            <div class="text-container d-flex d-lg-block align-items-center px-4 py-0">
                <h4 class="d-none d-lg-block pt-4">Consegne sempre disponibili nella tua città</h4>
                <p class="my-2 my-md-3 my-lg-4 d-none d-lg-block my-xl-5">Segui in diretta dove si trova il tuo ordine</p>
                <button class="ms-btn mt-xxl-5">
                    <router-link class="ms-decoration-none text-white" :to="{ name: 'restaurants'}">Ordina qui dal tuo ristorante preferito!</router-link>
                </button>
            </div>
            <div class="img-container">
                <div class="message">
                    <span class="d-flex align-items-center fw-light ms-fontsize"><img src="../../public/favicon.ico" alt="" class="me-1">DELIVEBOO</span>
                    <p class="fw-bold mb-0">Aggiornamento ordine</p>
                    <p class="mb-0">Segui da vicino il tuo ordine!</p>
                </div>
                <img src="../assets/official-map-rovello.png" alt="">
            </div>
        </section>
    </div>
    <section class="button">
    </section>
</template>


<style scoped lang="scss">
   @use '../style/partials/variables' as *;
   .ms-main-title{
    font-size: 50px;
   }
   .hero{
        background-image: url('../assets/wallpaperflare.com_wallpaper.jpg');
        height: calc(100vh - $header-h);
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
    border: none;
    text-decoration: none;
}
   .ms-bg{
    box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.08);
    -webkit-box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.08);
    -moz-box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.08);
    border-radius: 30px;
}
.map{
 margin: 100px 0;
 overflow: hidden;
}
.ms-margin{
    margin-bottom: 170px;
}
.ms-decoration-none{
text-decoration: none;
}
.img-container{
width: 50%;
position: relative;
img{
    width: 100%;
    height: 100%;
}
}
.text-container{
width: 50%;
/* padding-top: 4vw;
padding-left: 4vw; */
h3{
    font-size: 3vw;
}
p{
    width: 70%;
}
}
.message{
    position: absolute;
    top: 5%;
    right: 10%;
    z-index: 10;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.08);
    -webkit-box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.08);
    -moz-box-shadow: 0px 14px 35px 33px rgba(0,0,0,0.08);
    padding: 1vw 1.2vw;
    max-width: 80%;
    p{
        font-size: 1.3vh;
    }
    img{
        width: 15px;
    }
    .ms-fontsize{
        font-size: 11px;
    }
}
</style>