

<script setup>
import { ref, onMounted } from "vue";
import { fetchCategories } from "@/api/categories"; // API 함수 가져오기
import CategoryList from '../../components/Category/CategoryList.vue'
import './home.scss'
// 반응형 데이터
const categories = ref([]);

// API 호출 함수
const loadCategories = async () => {
  try {
    categories.value = await fetchCategories(); // API 함수 실행
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
};

// 컴포넌트가 마운트될 때 데이터 호출
onMounted(() => {
  loadCategories();
});
</script>
<template>
  <div class="bg-whitesmoke">
    <div class="container">
      <h2 class="sc-title">Categories</h2>
      <CategoryList :categories = "categories" />
    </div>
  </div>
</template>