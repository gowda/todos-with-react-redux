import React from 'react';
import List from './list';
import MarkAllAsComponentButton from './mark-all-as-complete-button';

export default () => (
  <section className='main'>
    <MarkAllAsComponentButton />
    <List />
  </section>
);
