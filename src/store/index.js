import thunk from "redux-thunk";
import reducer from "./reducers/index";

import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(reducer, {}/* preloadedState, */ ,
//     composeEnhancers(

//     applyMiddleware(thunk)
//   ));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const thunk = store => next => action =>{
//     console.log(action);
//     if(action.type=='CHANGE_NAME'){
//         console.log('ahhh');
//     }
// }

const store = createStore(
  reducer,
  {},
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
