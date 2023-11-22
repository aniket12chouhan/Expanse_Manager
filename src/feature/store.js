import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./ExpenseSlice/expenseSlice"

const store = configureStore({
    reducer: {
        expense: expenseReducer
    }
})
export default store