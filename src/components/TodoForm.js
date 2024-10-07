import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos';
import styled from 'styled-components';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newTodo = {
        id: Date.now(),  // Unique id using timestamp
        title,
        body: content,
        isDone: false
      };
      dispatch(addTodo(newTodo));
      setTitle('');
      setContent('');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <AddButton type="submit">Add</AddButton>
    </FormContainer>
  );
};

export default TodoForm;

// Styled-components for layout
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
