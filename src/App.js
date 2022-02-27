import './App.css';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
