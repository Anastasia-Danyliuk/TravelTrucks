import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchVans = createAsyncThunk(
    "vans/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/campers");
            return response.data.items || response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);