import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../api-action';

const initialState = {
  users: [],
  isLoading: true,
  error: false,
  scroll: true, 
  countUsers: 0,
  newUser: [],
  currentId: null,
  modalFlag: false,
  openModal: false,
  editUser: null,
  image:'',
  filteredUsers: [],
  openMenu: true,
  sortingValue: ''
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

    setSorting: (state, action) => {
      state.sortingValue = action.payload;
      switch (state.sortingValue) {
        case 'up':
          state.users = state.users.sort((a, b) => (a.firstName > b.firstName) - (a.firstName < b.firstName))
          break;
        case 'down':
          state.users = state.users.sort((a, b) => (b.firstName > a.firstName) - (b.firstName < a.firstName))
          break;
        default:
      }
    },

    setModalFlag: (state, action) => {
      state.modalFlag = action.payload;
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

    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
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
        state.error = false;
        state.users = [...state.users,...action.payload.users];
        if (state.countUsers === 0) {
          state.countUsers = action.payload.total;
        }
      })
      .addCase(fetchUsers.rejected, (state,action) => {
        state.error = true
      })
  }
})

export const { scrolling, addNewUser, setSorting, setCurrentId, setModalFlag, setOpenModal, editUser, setImage, filteredUsers, setOpenMenu } = dataLoading.actions;