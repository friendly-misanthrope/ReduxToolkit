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

const usersSlice = createSlice({
  name: users,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    }),
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    });
  }
});

module.exports = usersSlice;