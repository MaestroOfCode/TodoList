// Action Types
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "todos/GET_TODO_BY_ID";

// Initial State
const initialState = [
  { id: 1, title: "View React Lectures", body: "Learn from Chapter 1 to 12", isDone: false },
  { id: 2, title: "Eat lunch", body: "What's for lunch...?", isDone: false }
];

// Action Creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleStatusTodo = (id) => ({
  type: TOGGLE_STATUS_TODO,
  payload: id,
});

export const getTodoById = (id) => ({
  type: GET_TODO_BY_ID,
  payload: id,
});

// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_STATUS_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case GET_TODO_BY_ID:
      return state.find((todo) => todo.id === action.payload);
    default:
      return state;
  }
};

export default todosReducer;
