import axiosInstance from "@/api/axios"; 
import { ref } from "vue";

const categories = ref([]);

// API 호출 함수
export const fetchCategories = async () => {
  try {
    const url = "categories.php";
    const response = await axiosInstance.get(url);
    //console.log("API Response:", response.data); // 데이터 확인용
    return response.data.categories; 
    console.log(`API URL: ${axiosInstance.defaults.baseURL}${url}`);
   
    // API URL 출력
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

};

