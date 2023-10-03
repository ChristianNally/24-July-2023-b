import { useEffect } from 'react';
import {useParams, useNavigate, Navigate} from 'react-router-dom';

const Product = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/about');
  //   }, 3000);
  // }, []);

  return (
    <div>
      <h2>This page has detailed information about product #{params.productId}</h2>
      {/* <Navigate to="/home" /> */}
    </div>
  );
};

export default Product;
