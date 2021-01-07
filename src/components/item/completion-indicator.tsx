import React from 'react';

interface Props {
  checked: boolean;
  onClick: () => void;
}

export default ({ checked, onClick }: Props) => (
  <input
    className='toggle'
    type='checkbox'
    checked={checked}
    onChange={onClick}
  />
);
