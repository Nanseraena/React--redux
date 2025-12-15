type Todo = {
  id: number;
  item: any;
};

type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: [],
};

type Action =
  | { type: "ADD_TO_LIST"; payLoad: { item: any } }
  | { type: "REMOVE_FROM_LIST"; payLoad: { id: number } }
  | { type: "SET_TODOS"; payLoad: { todos: Todo[] } };

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payLoad.todos,
      };

    case "ADD_TO_LIST":
      return {
        ...state,
        todos: [...state.todos, action.payLoad.item],
      };

    case "REMOVE_FROM_LIST":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payLoad.id),
      };

    default:
      return state;
  }
};

export default todoReducer;
