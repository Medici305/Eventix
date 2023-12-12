<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const message = ref('Events');

onMounted(() => {
  console.log(`Welcome to ${message.value}`);
});
</script>
