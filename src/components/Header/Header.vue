<script setup>
import './header.scss'
import NavBar from './NavBar.vue'
import SideBar from './SideBar.vue'
import SchForm from './SchForm.vue'
import { ref } from 'vue';
const sideMenuOpen = ref(false); 
const MenuOpen = () => {
  sideMenuOpen.value = !sideMenuOpen.value;
};
const MenuClose = () => {
  sideMenuOpen.value = false;
};
</script>
<template>
  <div>
    <NavBar :MenuOpen="MenuOpen" />
    <SideBar :sideMenuOpen="sideMenuOpen" :MenuClose="MenuClose" />
    <div class="header-content">
      <SchForm />
      <h2>What are you favorite cuisines?</h2>
      <p>Personalize your experience</p>
    </div>
  </div>
</template>