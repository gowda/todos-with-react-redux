import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Component, { OwnProps } from './components/item';
import { DELETE_TODO, TOGGLE_TODO_COMPLETION, UPDATE_TODO } from './reducer';

const mapDispatch = (dispatch: Dispatch, { id }: OwnProps) => ({
  onChange: (value: string) =>
    dispatch({ type: UPDATE_TODO, payload: { id, content: value } }),
  onToggleCompletion: () =>
    dispatch({ type: TOGGLE_TODO_COMPLETION, payload: id }),
  onDelete: () => dispatch({ type: DELETE_TODO, payload: id }),
});

export default connect(null, mapDispatch)(Component);
