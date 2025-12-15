export const ADD_TO_LIST = (item: any) => {
  return {
    type: "ADD_TO_LIST",
    payLoad: { item },
  };
};

export const REMOVE_FROM_LIST = (id: any) => {
  return {
    type: "REMOVE_FROM_LIST",
    payLoad: { id },
  };
};

export const SET_TODOS = (todos: any[]) => {
  return {
    type: "SET_TODOS",
    payLoad: { todos },
  };
};
