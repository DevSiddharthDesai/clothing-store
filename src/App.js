import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home-component';
import Navigation from './routes/navigation/navigation-component';
import Shop from './routes/shop/shop-component';
import Auth from './routes/auth/auth';
import Checkout from './routes/checkout/checkout-component';
import SingleCategory from './routes/Singlecategory/single-category-component';

// crown-clothing-db-27185
const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='/shop/:categoryName' element={<SingleCategory />} />  
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
