import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Breakout</h2>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/admin" element={<h2>Admins only!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
