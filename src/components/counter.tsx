import React from 'react';

interface Props {
  count: number;
}

export default ({ count }: Props) => (
  <span className='todo-count'>
    <strong>{count}</strong> {count === 1 ? 'item' : 'items'} left
  </span>
);
