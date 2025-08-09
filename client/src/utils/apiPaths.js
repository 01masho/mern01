export const BASE_URL ="https://improved-orbit-7vxgprp7jqg4cpqxp-8080.github.dev";

export const API_PATHS ={
    AUTH :{
        LOGIN: "/api/auth/login",
        REGISTER: "/api/auth/register",
        GET_USER_INFO: (userId)=>`/api/auth/${userId}`,
    },
    DASHBOARD:{
        GET_DATA: "/api/dashboard",
    },
      INCOME :{
        ADD_INCOME: "/api/income/add-income",
        GET_ALL_INCOME: "/api/income",
        DOWNLOAD_INCOME: "/api/income/downloadExcel",
        DELETE_INCOME: (incomeId)=>`/api/income/${incomeId}`,
    },
      EXPENSE :{
        ADD_EXPENSE: "/api/expense/add-expense",
        GET_ALL_EXPENSE: "/api/expense",
        DOWNLOAD_EXPENSE: "/api/expense/downloadExcel",
        DELETE_EXPENCE: (expenseId)=>`/api/expense/${expenseId}`,
    },
    IMAGE:{
      UPLOAD_IMAGE:"/api/auth/upload-image"
    }
  }