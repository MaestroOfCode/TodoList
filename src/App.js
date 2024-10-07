import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from './pages/MainPage';
import TodoDetail from './pages/TodoDetail';
import store from './redux/store';
import styled from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Routes>
            {/* Main Page Route */}
            <Route path="/" element={<MainPage />} />
            
            {/* Todo Detail Page Route */}
            <Route path="/todo/:id" element={<TodoDetail />} />
          </Routes>
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;

// Styled-component for setting the max and min widths and centering content
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
