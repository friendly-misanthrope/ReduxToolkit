const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numIcecreams: 5
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numIcecreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numIcecreams += action.payload;
    }
  }
});

module.exports = icecreamSlice.reducer;
module.exports = icecreamSlice;