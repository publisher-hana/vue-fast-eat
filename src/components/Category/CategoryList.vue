<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
});
</script>
<template>
 <ul class="grid grid-5col">
    <li v-for="(category, index) in categories" :key="index">
      <RouterLink :to="`/meal/category/${category.strCategory}`" class="category-item">
        <figure><img :src="category.strCategoryThumb" :alt="category.strCategory" width="100" /></figure>
        <span class="label">{{ category.strCategory }}</span>
      </RouterLink>
    </li>
  </ul>
</template>