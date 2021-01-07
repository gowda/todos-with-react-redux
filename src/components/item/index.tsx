import React, { useState } from 'react';

import { Todo } from '../../types';
import View from './view';
import Editor from './editor';

export type OwnProps = Todo;

type Props = OwnProps & {
  onChange: (value: string) => void;
  onDelete: () => void;
  onToggleCompletion: () => void;
};

export default ({
  id,
  completed,
  content,
  onChange,
  onToggleCompletion,
  onDelete,
}: Props) => {
  const [editing, setEditing] = useState<boolean>(false);

  return (
    <>
      {editing ? (
        <Editor
          completed={completed}
          content={content}
          onCancel={() => setEditing(false)}
          onSubmit={(value: string) => {
            onChange(value);
            setEditing(false);
          }}
        />
      ) : (
        <View
          id={id}
          completed={completed}
          content={content}
          onEdit={() => setEditing(true)}
          onDelete={onDelete}
          onToggleCompletion={onToggleCompletion}
        />
      )}
    </>
  );
};
