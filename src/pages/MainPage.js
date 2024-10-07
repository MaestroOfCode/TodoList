import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Container>
      <Header>My Todo List</Header>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

export default MainPage;

// Styled components for the layout
const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;
