import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import {applyMiddleware} from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(addLoggingToDispatch, alertMiddleware));

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

const addLoggingToDispatch = store => next => action => {
        console.log(store.getState());
        console.log(action);
        next(action);
        console.log(store.getState());
  };

const alertMiddleware = store => next => action => {
  alert(`You are about to do ${next}`);
  next(action);
};

export default configureStore;
