<script setup>
defineProps({
  categoryMeals: {
    type: Array,
    required: true,
  },
});
</script>
<template>
<div>
  <h2 class="sc-title">Meals</h2>
  <ul class="grid grid-5col meal-list">

    <li v-for="(meal) in categoryMeals" :key="meal.idMeal">
      <RouterLink :to="`/meal/${meal.idMeal}`" >
        <figure><img :src="meal.strMealThumb" :alt="meal" /></figure>
        <strong class="meal-tit">{{ meal.strMeal }}</strong>
      </RouterLink>
    </li>
  </ul>  
</div>
</template>