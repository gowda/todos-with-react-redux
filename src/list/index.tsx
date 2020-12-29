import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { State } from '../reducer';

import { Todo } from '../types';
import Item from './item';

interface Props {
  items: Todo[];
}

const Component = ({ items }: Props) => {
  const location = useLocation();
  const [filteredItems, setFilteredItems] = useState<Todo[]>(items);

  useEffect(() => {
    const filter = location.pathname.replace('/', '');

    if (filter === 'active') {
      setFilteredItems(items.filter(({ completed }) => !completed));
    } else if (filter === 'completed') {
      setFilteredItems(items.filter(({ completed }) => completed));
    } else {
      setFilteredItems(items);
    }
  }, [location, items]);

  return (
    <ul className='todo-list'>
      {filteredItems.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

const mapState = (state: State) => ({
  items: state,
});

export default connect(mapState)(Component);
