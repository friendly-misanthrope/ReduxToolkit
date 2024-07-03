const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../reduxToolkit/features/cake/cakeSlice');
const icecreamReducer = require('../reduxToolkit/features/icecream/icecreamSlice');

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer
  }
});

module.exports = store