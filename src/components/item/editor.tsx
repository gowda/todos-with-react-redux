/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';

interface Props {
  completed: boolean;
  content: string;
  onCancel: () => void;
  onSubmit: (value: string) => void;
}

export default ({ completed, content, onCancel, onSubmit }: Props) => {
  const [localContent, setLocalContent] = useState<string>(content);

  return (
    <li className={`${completed ? 'completed' : ''} editing`}>
      <input
        className='edit'
        value={localContent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLocalContent(e.target.value)
        }
        onBlur={() => onCancel()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (localContent.trim().length !== 0) {
              onSubmit(localContent.trim());
            } else {
              onSubmit(content);
            }
          } else if (e.key === 'Escape') {
            setLocalContent(content);
            onCancel();
          }
        }}
        autoFocus
      />
    </li>
  );
};
