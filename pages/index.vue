<template>
  <div class="center-container">
    <h1 class="heading">Calculadora y Checklist</h1>
    <p class="paragraph">Página de inicio</p>
    <!-- <button @click="loginWithGoogle">Iniciar sesión con Google</button> -->
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useCounterStore } from '../stores/CounterStore'
import { ElButton, ElInput, ElRow, ElCol, ElCard } from 'element-plus'

const counterStore = useCounterStore()
const newCounterName = ref('')
// const loginWithGoogle = async () => {
//   try {
//     // Realizar el inicio de sesión con Google utilizando redireccionamiento a la URL de autorización de Google
//     window.location.href = 'https://accounts.google.com/o/oauth2/auth?' +
//       'client_id=1090553916581-gat5k4ripen23dsaema36uji3jgp26fd.apps.googleusercontent.com' +
//       '&redirect_uri=http://localhost:3000/element-plus-examples' + // Cambia la URI de redireccionamiento aquí
//       '&response_type=code' +
//       '&scope=email%20profile';

//   } catch (error) {
//     console.error('Error al iniciar sesión con Google:', error);
//   }
// };
const addNewCounter = () => {
  counterStore.addCounter(newCounterName.value)
  newCounterName.value = ''
}

const incrementCounter = (counterId: string) => {
  counterStore.incrementCounter(counterId)
}
const counters = counterStore.counters
</script>

<style scoped>
.center-container {
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
}

.heading {
  font-size: 24px;
  margin-bottom: 10px;
}

.paragraph {
  font-size: 16px;
  margin-bottom: 20px;
}

.center-container {
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  text-align: center;
}

.counter-card {
    margin: 10px;
  margin-bottom: 20px;
}

.counter-info {
    margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.counter-name {
  font-size: 18px;
  margin: 10px;
  font-weight: bold;
}

.increment-button {
  margin: 10px;
}

.counter-count {
    margin: 10px;
}
</style>
