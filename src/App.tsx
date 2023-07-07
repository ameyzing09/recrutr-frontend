import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
