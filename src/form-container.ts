import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ADD_TODO } from './reducer';
import Component from './components/form';

const mapDispatch = (dispatch: Dispatch) => ({
  onSubmit: (content: string) => dispatch({ type: ADD_TODO, payload: content }),
});

export default connect(null, mapDispatch)(Component);
