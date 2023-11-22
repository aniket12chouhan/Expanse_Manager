import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        expense: [
           
        ],

        TotalIncome : 0 ,
        TotalExpense : 0,
        
    },
    reducers: {

        SetExpense : (state , action) =>{
        
            state.expense = [ ...state.expense ,action.payload ]

        },

        TotalAmount :(state)=>{
            
            state.TotalIncome = state.expense.filter(exp => exp.Type === "credit").reduce((p , c) =>{
                return p + parseInt(c.Amount)
            },0)
            state.TotalExpense = state.expense.filter(exp => exp.Type === "debit").reduce((p , c) =>{
                return p + parseInt(c.Amount) 
            },0)
        },

        DeleteExp : (state ,action) =>{
            state.expense = state.expense.filter((exp) => exp.id !== action.payload)
        }
    }
})

export const {TotalAmount ,SetExpense ,DeleteExp} = expenseSlice.actions

export default expenseSlice.reducer