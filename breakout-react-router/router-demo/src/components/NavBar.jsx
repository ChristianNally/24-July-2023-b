import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h2>Navigation Bar</h2>
      <Link to="/home">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/products">Products </Link>
    </div>
  );
};

export default NavBar;
