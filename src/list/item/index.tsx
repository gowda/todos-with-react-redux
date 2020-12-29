import React, { useState } from 'react';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Todo } from '../../types';
import View from './view';
import Editor from './editor';
import {
  DELETE_TODO,
  TOGGLE_TODO_COMPLETION,
  UPDATE_TODO,
} from '../../reducer';

type OwnProps = Todo;

type Props = OwnProps & {
  onChange: (value: string) => void;
  onDelete: () => void;
  onToggleCompletion: () => void;
};

const Component = ({
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

const mapDispatch = (dispatch: Dispatch, { id }: OwnProps) => ({
  onChange: (value: string) =>
    dispatch({ type: UPDATE_TODO, payload: { id, content: value } }),
  onToggleCompletion: () =>
    dispatch({ type: TOGGLE_TODO_COMPLETION, payload: id }),
  onDelete: () => dispatch({ type: DELETE_TODO, payload: id }),
});

export default connect(null, mapDispatch)(Component);
