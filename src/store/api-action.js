import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  'data/fetchUsers',
  async(splitUsers)=> {
    const {data} = await axios.get(`https://dummyjson.com/users?limit=20&skip=${splitUsers}`)
    return data
  }
)