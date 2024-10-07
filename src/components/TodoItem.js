import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, toggleStatusTodo } from '../redux/todos';
import styled from 'styled-components';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggleStatus = () => {
    dispatch(toggleStatusTodo(todo.id));
  };

  return (
    <TodoContainer>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <Actions>
        <StyledLink to={`/todo/${todo.id}`}>Details</StyledLink>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </Actions>
      <StatusButton onClick={handleToggleStatus}>
        {todo.isDone ? "Mark as Working" : "Mark as Done"}
      </StatusButton>
    </TodoContainer>
  );
};

export default TodoItem;

// Styled components for layout
const TodoContainer = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Actions = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const StatusButton = styled.button`
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
