/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => (
  <button type='button' className='destroy' onClick={onClick} />
);
