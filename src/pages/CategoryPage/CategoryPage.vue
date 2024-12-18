<script setup>
import { ref, onMounted, watch   } from "vue";
import { fetchCategories } from "@/api/categories"; 
import axiosInstance from "@/api/axios"; 
import {useRoute } from "vue-router";
import MealList from '../../components/Meal/MealList.vue'
import './catepage.scss'

const route = useRoute();
const cateName = ref(route.params.name);
const categoryMeals = ref([]);
const catDescription = ref("")

const loadCategoryData = async () => {
   try {
    //전체 카테고리 가져오기(categories.php)
    const allCategories =await fetchCategories();;
    // cateName과 일치하는 설명 찾기
    const matchedCategory = allCategories.find(
      (category) => category.strCategory.toLowerCase() === cateName.value.toLowerCase()
    );
    if (matchedCategory) {
      catDescription.value = matchedCategory.strCategoryDescription;
    }

    //해당 카테고리의 음식 가져오기 (filter.php)
    const response = await axiosInstance.get(`filter.php?c=${cateName.value}`);
    categoryMeals.value = response.data.meals;
   }catch (error) {
    console.error("Error fetching categories:", error);
  }
};

// 컴포넌트 마운트 시 API 호출
onMounted(async () => {
 loadCategoryData();
});
// 라우트 변경 감지
watch(() => route.params.name, (newName) => {
  cateName.value = newName;
  loadCategoryData();
});

</script>
<template>
  <div class="bg-whitesmoke">
     <div class="container">
      <div class="cate-top">
        <h2 class="title">{{cateName}}</h2>
        <p class="description">{{ catDescription }}</p> 
      </div>
      <MealList :categoryMeals="categoryMeals" />
     </div>
  </div>
</template>