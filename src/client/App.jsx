import Product from "./Components/Product";
import Home from "./Pages/Home"
import {Route,Routes} from 'react-router-dom';
import Products from './Components/Products'
import SingleProduct from "./Components/SingleProducts";
import AllProducts from "./Components/AllProducts";
import { Link } from 'react-router-dom'





function App() {
  return <>
   <div className="navigate">
      <Link to= "/products">All Products</Link>
   </div>


   <div>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/products" element={<AllProducts/>} />
  <Route path="/products/:id" element={<SingleProduct />} />
  </Routes>
  </div>
  </>
}


export default App;
