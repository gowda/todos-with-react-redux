import React from 'react';

export interface Props {
  show: boolean;
  onClick: () => void;
}

export default ({ show, onClick }: Props) => (
  <>
    {show && (
      <button
        type='button'
        className='clear-completed'
        onClick={() => onClick()}
      >
        Clear completed
      </button>
    )}
  </>
);
