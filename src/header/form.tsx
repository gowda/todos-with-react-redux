/* eslint-disable jsx-a11y/no-autofocus */
import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ADD_TODO } from '../reducer';

interface Props {
  onSubmit: (content: string) => void;
}

const Component = ({ onSubmit }: Props) => {
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

const mapDispatch = (dispatch: Dispatch) => ({
  onSubmit: (content: string) => dispatch({ type: ADD_TODO, payload: content }),
});

export default connect(null, mapDispatch)(Component);
