import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {Routes, Route} from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import Home from './routes/home/home-component';
import Navigation from './routes/navigation/navigation-component';
import Shop from './routes/shop/shop-component';
import Auth from './routes/auth/auth';
import {getCategoriesAndDocuments} from './utils/firebase/firebase.utils';
import Checkout from './routes/checkout/checkout-component';
import SingleCategory from './routes/Singlecategory/single-category-component';
import { Test } from './routes/test/test';
import { setCurrentUser } from './store/user/user.action';
import { setCategoriesMap } from './store/categories/categories.action';


// crown-clothing-db-27185
const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
        
    const getCategoriesMap = async () => {
        
        const categoriesMap = await getCategoriesAndDocuments('categories');
        dispatch(setCategoriesMap(categoriesMap));
    }

    getCategoriesMap();

  },[]);
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='/shop/:categoryName' element={<SingleCategory />} />  
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='test' element={<Test />} />
      </Route>
    </Routes>
  );
};

export default App;
