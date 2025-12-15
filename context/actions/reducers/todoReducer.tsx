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
  | { type: "REMOVE_FROM_LIST"; payLoad: { id: number } };

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            item: action.payLoad.item,
          },
        ],
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
