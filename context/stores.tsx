import { createStore, combineReducers } from 'redux';

// simple todos reducer fallback (create a separate todoReducer.ts later if needed)
const todos = (state: any[] = [], action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ todos });

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
);

export default store;
