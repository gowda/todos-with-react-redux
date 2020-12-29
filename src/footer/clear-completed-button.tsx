import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
import { DELETE_COMPLETED, State } from '../reducer';

interface Props {
  show: boolean;
  onClick: () => void;
}

const Component = ({ show, onClick }: Props) => {
  const history = useHistory();

  return (
    <>
      {show && (
        <button
          type='button'
          className='clear-completed'
          onClick={() => {
            onClick();
            history.push('/');
          }}
        >
          Clear completed
        </button>
      )}
    </>
  );
};

const mapState = (state: State) => ({
  show: state.some(({ completed }) => completed),
});

const mapDispatch = (dispatch: Dispatch) => ({
  onClick: () => dispatch({ type: DELETE_COMPLETED }),
});

export default connect(mapState, mapDispatch)(Component);
