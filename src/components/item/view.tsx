import React from 'react';

import { Todo } from '../../types';
import CompletionIndicator from './completion-indicator';
import DeleteButton from './delete-button';

type Props = Todo & {
  onEdit: () => void;
  onDelete: () => void;
  onToggleCompletion: () => void;
};

export default ({
  completed,
  content,
  onEdit,
  onDelete,
  onToggleCompletion,
}: Props) => (
  <li className={`${completed ? 'completed' : ''}`}>
    <div className='view' onDoubleClick={onEdit}>
      <CompletionIndicator checked={completed} onClick={onToggleCompletion} />
      <label>{content}</label>
      <DeleteButton onClick={onDelete} />
    </div>
  </li>
);
