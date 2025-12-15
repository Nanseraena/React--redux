import { createStore, combineReducers } from 'redux';
import todoReducer from './actions/reducers/todoReducer';

const rootReducer = combineReducers({ todos: todoReducer });

const store = createStore(
  rootReducer,
  typeof window !== 'undefined' ? (window as any).__REDUX_DEVTOOLS_EXTENSION__?.() : undefined
);

export default store;
