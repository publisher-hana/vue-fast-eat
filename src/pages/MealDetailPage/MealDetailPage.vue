<script setup>
import './mealdetail.scss'
import { ref, onMounted} from "vue";
import {useRoute } from "vue-router";
import axiosInstance from "@/api/axios"; 
const categoryMeals = ref([]);
const route = useRoute();
const mealId = route.params.id;
const MealName = ref(""); 
const ImgThumb = ref(""); 
const Category = ref(""); 
const Source = ref(""); 
const Tags = ref("[]"); 
const IngredientArr = ref([]); 
const measureArr = ref([]); 
const instructions = ref([]); 

const loadMealData = async () => {
  try{
     // API 호출
    const response = await axiosInstance.get(`lookup.php?i=${mealId}`);
    console.log("API Response:", response.data); // API 응답 확인용 로그
    categoryMeals.value = response.data.meals; // 데이터 상태 업데이트
    
    const meal = response.data.meals?.[0]; // 첫 번째 데이터만 추출
    if (meal) {
      MealName.value = meal.strMeal;
      ImgThumb.value = meal.strMealThumb
      Category.value = meal.strCategory;
      Source.value = meal.strSource;
      
      Tags.value = meal.strTags ? meal.strTags.split(",") : [];
      //ingredientArr
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]?.trim();
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      IngredientArr.value = ingredients;

      //measure
      const measures  = [];
      for (let i = 1; i <= 20; i++) {
        const measure = meal[`strMeasure${i}`]?.trim();
        if (measure) {
          measures.push(measure);
        }
      }
      measureArr.value = measures;
      //instruction
      const instructionText = meal.strInstructions;
      const lines = instructionText.split('\r\n').filter(line => line.trim() !== '');
      instructions.value = lines;
      console.log("instructions--->"+instructions.value);
    }


    // 가져온 meal 데이터 확인
    console.log("Category Meals:", categoryMeals.value);
  
  }catch (error) {
    console.error("Error fetching meals:", error);
  }
}
onMounted(async () => {
 loadMealData();
});
</script>
<template>
  <div class="bg-whitesmoke">
    <div class="container">
        <ul class="breadcrumb">
          <li>
            <RouterLink to="/"><icon-ic-baseline-home class="ico-home" /><span class="blind">홈</span></RouterLink>
          </li>
          <li>
            <icon-material-symbols-light-double-arrow class="ico-arr"/>
          </li>
            <li>{{MealName }}</li>
        </ul>
        <section class="detail-content">
          <h2 class="sc-title">Meal Details</h2>
          <div class="detail-box">
            <div class="top-intro">
              <figure>
                <img :src="ImgThumb" alt="" />
              </figure>
              <div class="detail-intro">
                <h3 class="detail-tit">{{MealName }}</h3>
                <ul class="info-list">
                  <li><em>CATEGORY:</em> {{Category}}</li>
                  <li><em>Source:</em> <span class="clamp source-txt">{{Source}}</span></li>
                  <li><em>Tags:</em> <span span v-for="(tag, index) in Tags" :key="index">{{tag}}</span></li>
                </ul>
                <div class="indredients">
                  <strong>indredients</strong>
                  <ul class="grid grid-3col">
                    <li v-for="(ingredient, index) in IngredientArr" :key="index"><span class="num">{{index +1}}</span>{{ingredient}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="measure">
              <h4>Measure</h4>
              <div class="measure-box">
                <span v-for="(measure, index) in measureArr" :key="index"><icon-mdi-silverware-spoon class="measure-ico"/>{{measure}}</span>
              </div>
            </div>
            <div class="intructions">
              <h4>Intructions</h4>
              <ul>
                <li v-for="(instr, index) in instructions" :key="index">{{instr}}</li>
              </ul>
            </div>
          </div>
         
        </section>
    </div>
  </div>
</template>
