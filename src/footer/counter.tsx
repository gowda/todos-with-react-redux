import React from 'react';
import { connect } from 'react-redux';

import { State } from '../reducer';

interface Props {
  count: number;
}

const Component = ({ count }: Props) => (
  <span className='todo-count'>
    <strong>{count}</strong> {count === 1 ? 'item' : 'items'} left
  </span>
);

const mapState = (state: State) => ({
  count: state.filter(({ completed }) => !completed).length,
});

export default connect(mapState)(Component);
