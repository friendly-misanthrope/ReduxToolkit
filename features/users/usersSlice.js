const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: ''
}

// Promise resolves to pending, fulfilled, or rejected action type
const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      res.data.map((user) => {
        return user
      });
    });
});