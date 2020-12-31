import React from 'react';
import { connect } from 'react-redux';
import List from './list';
import MarkAllAsComponentButton from './mark-all-as-complete-button';
import { State } from './reducer';

interface Props {
  show: boolean;
}

const Component = ({ show }: Props) => (
  <>
    {show && (
      <section className='main'>
        <MarkAllAsComponentButton />
        <List />
      </section>
    )}
  </>
);

const mapState = (state: State) => ({
  show: state.length !== 0,
});

export default connect(mapState)(Component);
