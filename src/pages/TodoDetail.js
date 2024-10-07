import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) =>
    state.find((todo) => todo.id === parseInt(id))
  );

  return (
    <DetailContainer>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <p><strong>Status:</strong> {todo.isDone ? 'Done' : 'In Progress'}</p>
      <BackButton onClick={() => navigate(-1)}>Back to previous</BackButton>
    </DetailContainer>
  );
};

export default TodoDetail;

// Styled components for layout
const DetailContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const BackButton = styled.button`
  margin-top: 20px;
`;
