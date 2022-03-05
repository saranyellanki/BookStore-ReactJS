import './App.css';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
