import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MARK_ALL_AS_DONE, State } from './reducer';

interface Props {
  show: boolean;
  checked: boolean;
  onClick: () => void;
}

const Component = ({ show, checked, onClick }: Props) => (
  <>
    {show && (
      <>
        <input
          id='toggle-all'
          className='toggle-all'
          type='checkbox'
          checked={checked}
          onClick={onClick}
        />
        <label htmlFor='toggle-all'>Mark all as complete</label>
      </>
    )}
  </>
);

const mapState = (state: State) => ({
  show: state.length !== 0,
  checked: state.every(({ completed }) => completed),
});

const mapDispatch = (dispatch: Dispatch) => ({
  onClick: () => dispatch({ type: MARK_ALL_AS_DONE }),
});

export default connect(mapState, mapDispatch)(Component);
