const configureStore = require('@reduxjs/toolkit').configureStore;
const reduxLogger = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice').reducer;
const icecreamReducer = require('../features/icecream/icecreamSlice').reducer;

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer
  },
  middleware: ((getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger)
  })
});

module.exports = store