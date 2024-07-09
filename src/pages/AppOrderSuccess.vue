<script>
import AppBack from '../components/AppBack.vue';

export default {
    name: 'AppOrderSuccess',
    components: {
        AppBack
    },

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
                  <i class="fa-solid fa-check text-white"></i>
                </div>
                <h2 class="mt-4 font-weight-bold text-1">GRAZIE</h2>
                <h3 class="mb-3">IL TUO ORDINE È STATO CONFERMATO</h3>
                <p class="text-muted">Ti invieremo a breve una conferma sull'indirizzo email fornito.</p>
              </div>
  
              <div class="text-dark p-4 rounded">  
                <div class="order-progress">
                  <div class="progress-step col-3 active">
                    <div class="step-icon text-white"><i class="fa-solid fa-check"></i></div>
                    <div class="step-label">ORDINE CONFERMATO</div>
                  </div>
                  <div class="progress-step col-3">
                    <div class="step-icon bg-secondary text-white"><i class="fa-solid fa-hourglass-start"></i></div>
                    <div class="step-label">PREPARAZIONE RISTORANTE</div>
                  </div>
                  <div class="progress-step col-3">
                    <div class="step-icon bg-secondary text-white"><i class="fa-solid fa-hourglass-start"></i></div>
                    <div class="step-label">CONFEZIONE PRONTA</div>
                  </div>
                  <div class="progress-step col-3">
                    <div class="step-icon bg-secondary text-white"><i class="fa-solid fa-hourglass-start"></i></div>
                    <div class="step-label">PRODOTTO IN CONSEGNA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <style scoped lang="scss">
  @use '../style/partials/variables' as *;

  .text-1{
    color: $main-color;
  }
  
  .check-circle {
    width: 100px;
    height: 100px;
    background-color: $main-color; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px; 
  }
  
  .check-circle i {
    font-size: 65px; 
  }
  
  .order-progress {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .progress-step {
    flex: 1;
    text-align: center;
  }
  
  .step-icon {
    width: 40px;
    height: 40px;
    background-color: #dee2e6; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px;
    font-size: 20px; 
  }
  
  .progress-step.active .step-icon {
    background-color: $main-color; 
    color: white;
  }
  
  .step-label {
    font-size: 14px;
    color: #495057; 
    margin-top: 8px; 
  }
  
  .text-success {
    color: #28a745;
  }
  
  .text-muted {
    color: #6c757d;
  }
  </style>
  