import { Todo } from './types';

export type State = Todo[];

const initialState: State = [];

export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO_COMPLETION = 'todos/TOGGLE_TODO_COMPLETION';
export const UPDATE_TODO = 'todos/UPDATE_TODO';
export const DELETE_TODO = 'todos/DELETE_TODO';
export const MARK_ALL_AS_DONE = 'todos/MARK_ALL_AS_DONE';
export const DELETE_COMPLETED = 'todos/DELETE_COMPLETED';

interface Action {
  type:
    | typeof ADD_TODO
    | typeof TOGGLE_TODO_COMPLETION
    | typeof UPDATE_TODO
    | typeof DELETE_TODO
    | typeof MARK_ALL_AS_DONE
    | typeof DELETE_COMPLETED;
  payload: any;
}

export default (state = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((acc, { id }) => Math.max(acc, id), 0) + 1,
          content: action.payload,
          completed: false,
        },
      ];
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, content: action.payload.content };
        }
        return todo;
      });
    case TOGGLE_TODO_COMPLETION:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter(({ id }) => id !== action.payload);
    case MARK_ALL_AS_DONE:
      return state.map(({ completed, ...rest }) => ({
        ...rest,
        completed: true,
      }));
    case DELETE_COMPLETED:
      return state.filter(({ completed }) => !completed);
    default:
      return state;
  }
};
