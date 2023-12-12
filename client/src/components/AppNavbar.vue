<template>
  <nav class="app-navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link v-if="isLoggedIn" to="/account">Account</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Login/Register</router-link>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';

const userLoggedIn = ref(false);
const isLoggedIn = computed(() => userLoggedIn.value);
</script>

<style scoped>
.app-navbar {
  font-family: 'Open Sans', sans-serif;
  background-color: var(--primary-color);
  padding: 1rem;
}

.app-navbar a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

.app-navbar a:hover {
  color: var(--secondary-color);
}
</style>
