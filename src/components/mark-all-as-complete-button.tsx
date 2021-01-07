import React from 'react';

interface Props {
  show: boolean;
  checked: boolean;
  onClick: () => void;
}

export default ({ show, checked, onClick }: Props) => (
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
