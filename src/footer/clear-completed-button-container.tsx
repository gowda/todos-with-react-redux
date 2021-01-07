import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import Component, { Props } from '../components/clear-completed-button';
import { DELETE_COMPLETED, State } from '../reducer';

const WrappedComponent = ({ show, onClick }: Props) => {
  const history = useHistory();

  return (
    <Component
      show={show}
      onClick={() => {
        onClick();
        history.push('/');
      }}
    />
  );
};

const mapState = (state: State) => ({
  show: state.some(({ completed }) => completed),
});

const mapDispatch = (dispatch: Dispatch) => ({
  onClick: () => dispatch({ type: DELETE_COMPLETED }),
});

export default connect(mapState, mapDispatch)(WrappedComponent);
