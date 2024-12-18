<script setup>
  import { ref, onMounted } from "vue";
  import { fetchCategories } from "@/api/categories"; 
  const categories = ref([]);
  
  const loadCategories = async () => {
    try {
      categories.value = await fetchCategories(); // API 함수 실행
    } catch (error) {
      console.error("Failed to load categories:", error);
    }
  };
  onMounted(() => {
    loadCategories();
  });

 const props = defineProps({
    sideMenuOpen: Boolean,
    MenuClose:Function
  });
</script>
<template>
  <div class="side-bar" :class="{open:sideMenuOpen}">
    <button class="close" @click="MenuClose"><icon-ic-baseline-close class="ico-close"/></button>
    <ul>
      <li v-for="(category) in categories" :key="category.idCategory">
        <RouterLink 
          :to="`/meal/category/${category.strCategory}`" 
          @click="MenuClose"
        >
          {{ category.strCategory }}
        </RouterLink>
      </li>
    </ul>
  </div>
    
  </template>