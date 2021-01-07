/* eslint-disable jsx-a11y/no-autofocus */
import React, { ChangeEvent, useState } from 'react';

interface Props {
  onSubmit: (content: string) => void;
}

export default ({ onSubmit }: Props) => {
  const [content, setContent] = useState('');

  return (
    <input
      className='new-todo'
      placeholder='What needs to be done?'
      value={content}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setContent(e.target.value)
      }
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          if (content.trim().length !== 0) {
            onSubmit(content.trim());
          }
          setContent('');
        }
      }}
      autoFocus
    />
  );
};
