// Initial state
const initialState = {
    todos: [],
  };
  
  // Action types
  const ADD_TODO = 'ADD_TODO';
  const TOGGLE_TODO = 'TOGGLE_TODO';
  const DELETE_TODO = 'DELETE_TODO';
  
  // Action creators
  export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
  export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
  export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
  
  // Reducer
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  