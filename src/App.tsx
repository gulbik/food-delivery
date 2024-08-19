import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import ProfileMenu from './pages/ProfileMenu';
import Orders from './pages/Orders/Orders';
import History from './pages/History';
import Cart from './pages/Cart';
import FoodPage from './pages/FoodPage'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Address from './pages/Address';
import Checkout from './pages/Checkout';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<FoodPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile-menu" element={<ProfileMenu />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      
    </Router>
  );
};

export default App


