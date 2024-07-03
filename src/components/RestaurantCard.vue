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
  <div class="card shadow-sm">
    <img :src="restaurant.img" class="card-img-top" :alt="restaurant.restaurant_name">
    <div class="card-body">
      <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
      <p class="card-text"><i class="fas fa-map-marker-alt me-2"></i> {{ restaurant.address }}</p>
      <p class="card-text"><i class="fas fa-phone-alt me-2"></i> {{ restaurant.phone }}</p>
      <p class="card-text"><i class="fas fa-envelope me-2"></i> {{ restaurant.email }}</p>
      <p class="card-text"><i class="fas fa-id-card me-2"></i> P. IVA: {{ restaurant.vat_number }}</p>
      <a href="#" class="btn btn-primary">Apri Menu</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.btn-primary {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>