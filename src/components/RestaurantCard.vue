<script>
export default {
  name: 'RestaurantCard',
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div class="card shadow-sm h-100">
    <img :src="`http://127.0.0.1:8000/storage/${restaurant.img}`" class="card-img-top" :alt="restaurant.restaurant_name">
    <div class="card-body d-flex flex-column">
      <div class="ms-card-types">
          <span class="ms-bg-main badge rounded-pill d-inline-block me-1" v-for="singleRestaurantType in restaurant.types ">{{ singleRestaurantType.type_name }}</span> 
      </div>
      <h5 class="card-title w-100 text-truncate">{{ restaurant.restaurant_name }}</h5>
      <p class="card-text"><i class="fas fa-map-marker-alt me-2"></i>{{ restaurant.address }}</p>
      <p class="card-text"><i class="fas fa-phone-alt me-2"></i> {{ restaurant.phone }}</p>
      <p class="card-text"><i class="fas fa-envelope me-2"></i> {{ restaurant.email }}</p>

      <!-- <p class="card-text"><i class="fas fa-id-card me-2"></i> P. IVA: {{ restaurant.vat_number }}</p> -->
      <div class="d-flex justify-content-center mt-auto">  
        <router-link class="btn btn-primary" :to="{ name: 'single-menu', params: { slug: restaurant.slug } }">Vedi Menu</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.card {
  
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 0 20px rgba(149, 7, 7, 0.1);
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  padding: 1.5rem;
  position: relative;
}

.ms-card-types {
  position:absolute;
  top: 0;
  transform: translateY(-50%);
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.btn-primary {
  margin-top: 25px;
  display: inline-block;
  background-color: #00ccbc;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.5s ease;
  border: none;
}

.btn-primary:hover {
  background-color: #169280;
}

.ms-bg-main {
  background-color: $main_color;
}

/* STYLE PER L'IMAGINI */
.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: transform 0.3s ease;
  &:hover{
    transform: scale(1.05);
  }
}

</style>