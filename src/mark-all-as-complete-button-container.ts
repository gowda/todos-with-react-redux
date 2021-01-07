import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Component from './components/mark-all-as-complete-button';
import { MARK_ALL_AS_DONE, State } from './reducer';

const mapState = (state: State) => ({
  show: state.length !== 0,
  checked: state.every(({ completed }) => completed),
});

const mapDispatch = (dispatch: Dispatch) => ({
  onClick: () => dispatch({ type: MARK_ALL_AS_DONE }),
});

export default connect(mapState, mapDispatch)(Component);
