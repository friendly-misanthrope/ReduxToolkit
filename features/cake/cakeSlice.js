const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numCakes -= action.payload
    },
    restocked: (state, action) => {
      state.numCakes += action.payload
    }
  }
});

module.exports = cakeSlice.reducer;
// module.exports = cakeSlice.actions;

module.exports = cakeSlice;