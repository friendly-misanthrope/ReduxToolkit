const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').actions;
const icecreamActions = require('./features/icecream/icecreamSlice').actions;
const fetchUsers = require('./features/users/userSlice').fetchUsers

console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered(3));
// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(cakeActions.restocked(5));
// store.dispatch(icecreamActions.restocked(4));
store.dispatch(fetchUsers());
// ! Don't use unsubscribe() with async actions
// unsubscribe();