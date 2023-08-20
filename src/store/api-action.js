import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  'data/fetchUsers',
  async(currentUsers)=> {
    const {data} = await axios.get(`https://dummyjson.com/users?limit=10&skip=${currentUsers}`)
    return data
  }
)