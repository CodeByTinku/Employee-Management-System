import { createSlice } from "@reduxjs/toolkit";
import { deleteEmployee, getEmployees, postEmployees, updateEmployee } from "./employee.thunk";

const initialState = {
    employees: [],
    loading: false,
    error: null,
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        // get employees
        builder.addCase(getEmployees.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }),
        builder.addCase(getEmployees.fulfilled, (state, action)=>{
            state.employees = action.payload;
            state.loading = false;
        }),
        builder.addCase(getEmployees.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        // Post employees
        builder.addCase(postEmployees.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }),
        builder.addCase(postEmployees.fulfilled, (state)=>{
            state.loading = false;
        }),
        builder.addCase(postEmployees.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        // delete employees
        // builder.addCase(deleteEmployee.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;
        // })
        // builder.addCase(deleteEmployee.fulfilled, (state) => {
        //     state.loading = false;
        // })
        // builder.addCase(deleteEmployee.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload
        // })
        // update employees
        builder.addCase(updateEmployee.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }),
        builder.addCase(updateEmployee.fulfilled, (state)=>{
            state.loading = false;
        }),
        builder.addCase(updateEmployee.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { } = employeeSlice.actions;
export default employeeSlice.reducer