import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../api-action';

const initialState = {
  users: [],
  isLoading: true,
  scroll: true, 
  countUsers: 0,
  newUser: [],
  currentId: null,
  heading: false,
  openModal: false,
}

export const dataLoading = createSlice ({
  name: "users",
  initialState,
  reducers: {
    scrolling: (state, action) => {
      state.scroll = action.payload;
    },

    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },

    setHeading: (state, action) => {
      state.heading = action.payload;
    },

    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },

    addNewUser: (state,action) => {
      state.newUser.push(action.payload);
      // state.users.push(action.payload)
      // state.users = [...state.users, ...action.payload];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users,...action.payload.users];
        if (state.countUsers === 0) {
          state.countUsers = action.payload.total;
        }
      })
  }
})

export const { scrolling, addNewUser, setCurrentId, setHeading, setOpenModal } = dataLoading.actions;