const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').actions;
const icecreamActions = require('./features/icecream/icecreamSlice').actions;

console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State: ', store.getState());
});

store.dispatch(cakeActions.ordered(3));
store.dispatch(icecreamActions.ordered(2));
store.dispatch(cakeActions.restocked(5));
store.dispatch(icecreamActions.restocked(4));
unsubscribe();