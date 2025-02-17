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
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((users) => users.data.map(user => user))
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = ''
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  }
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;