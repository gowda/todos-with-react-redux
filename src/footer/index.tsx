import React from 'react';
import { connect } from 'react-redux';

import Counter from './counter-container';
import Navigation from '../components/navigation';
import ClearCompletedButton from './clear-completed-button-container';
import { State } from '../reducer';

interface Props {
  show: boolean;
}

const Component = ({ show }: Props) => (
  <>
    {show && (
      <footer className='footer'>
        <Counter />
        <Navigation />
        <ClearCompletedButton />
      </footer>
    )}
  </>
);

const mapState = (state: State) => ({
  show: state.length !== 0,
});

export default connect(mapState)(Component);
