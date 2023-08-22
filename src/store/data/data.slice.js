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
  editUser: null,
  image:'',
  filteredUsers: [],
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

    setImage: (state, action) => {
      state.image = action.payload;
    },

    setHeading: (state, action) => {
      state.heading = action.payload;
    },

    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },

    addNewUser: (state,action) => {
      state.newUser.push(action.payload);
    },

    filteredUsers: (state, action) => {
      state.filteredUsers = action.payload
    },

    editUser: (state, action) =>  {
      state.editUser = action.payload
      if(action.payload.id > state.countUsers) {
       state.newUser = 
       [
         ...state.newUser.slice(0, action.payload.id-101), 
         action.payload,
         ...state.newUser.slice(action.payload.id-100)
      ]
      } else {
        state.users = 
        [
          ...state.users.slice(0, action.payload.id-1), 
          action.payload,
          ...state.users.slice(action.payload.id)
       ]        
      }
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

export const { scrolling, addNewUser, setCurrentId, setHeading, setOpenModal, editUser, setImage, filteredUsers } = dataLoading.actions;