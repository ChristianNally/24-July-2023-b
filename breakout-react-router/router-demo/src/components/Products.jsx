import {Link, Routes, Route} from 'react-router-dom'; 
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>Please select a product from the list</h2>

      <Link to="/products/1">Product #1</Link><br/>
      <Link to="2">Product #2</Link><br/> {/* using a relative path */}
      <Link to="3">Product #3</Link><br/> {/* creates /products/3 */} 
      <Link to="4">Product #4</Link><br/>

      <Routes>
        <Route path=":productId" element={<Product />} />
        {/* <Route path=":productId/edit" element={<Edit />} /> */}
      </Routes>
    </div>
  );
};

export default Products;
