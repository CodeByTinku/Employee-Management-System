import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employee");
    //   console.log(response);
      return response.data;
    } catch (error) {
        return rejectWithValue('something went wrong!!!');
    }
  }
);

export const postEmployees = createAsyncThunk(
  "employee/postEmployee",
  async (details, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("employee", details);
      dispatch(getEmployees())
    //   console.log(response);
      return response.data;
    } catch (error) {
        return rejectWithValue('something went wrong!!!');
    }
  }
);
export const deleteEmployee = createAsyncThunk(
  "employee/postEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`employee/${id}`);
      dispatch(getEmployees())
    //   console.log(response);
      return response.data;
    } catch (error) {
        return rejectWithValue('something went wrong!!!');
    }
  }
);
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async ({id, details}, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put(`employee/${id}`, details);
      dispatch(getEmployees())
    //   console.log(response);
      return response.data;
    } catch (error) {
        return rejectWithValue('something went wrong!!!');
    }
  }
);
