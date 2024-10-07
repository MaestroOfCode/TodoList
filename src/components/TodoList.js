import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = () => {
  const todos = useSelector((state) => state);

  const inProgressTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <ListContainer>
      <TodoGroup>
        <h2>Working.. 🔥</h2>
        {inProgressTodos.length ? (
          inProgressTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p>No tasks in progress.</p>
        )}
      </TodoGroup>
      <TodoGroup>
        <h2>Done..! 🎉</h2>
        {doneTodos.length ? (
          doneTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p>No tasks completed.</p>
        )}
      </TodoGroup>
    </ListContainer>
  );
};

export default TodoList;

// Flexbox layout for grouping todos
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const TodoGroup = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  text-align: left;
  
  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  
  p {
    color: #888;
  }
`;
