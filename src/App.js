
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
// import Header from './Components/Header';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Login from './Components/Login';
import Register from './Components/Register';

import Protected from './Components/Protected';
import Product_List from './Components/Product_List';
import { store } from './services/Store/store';
import { Provider } from 'react-redux';
import CardItem from './Containers/CardItem';



function App() {
  return (
    <Provider store={store}>
      <div >
        < BrowserRouter>

          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<Protected Cmp={AddProduct} />} />
            {/* <Route path="/list" element={<Protected Cmp={Product_List} />} /> */}
            <Route path="/list" element={<Product_List />} />


            <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
            <Route path="/card" element={<CardItem/>} />
          </Routes>


        </BrowserRouter>



      </div>
    </Provider>
  );
}

export default App;
