import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue"; // 홈 컴포넌트

// 라우터 설정
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meal/category/:name",
    name: "CategoryPage",
    component: () => import('../pages/CategoryPage/CategoryPage.vue')
  },
  {
    path: "/meal/:id",
    name: "MealDetailPage",
    component: () => import('../pages/MealDetailPage/MealDetailPage.vue')
  },
 
];

const router = createRouter({
  history: createWebHistory(), // 브라우저 히스토리 모드
  routes, 
});

export default router;