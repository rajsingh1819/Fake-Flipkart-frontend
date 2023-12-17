
import './App.css';
import { BrowserRouter, Route, Routes ,} from 'react-router-dom';
// import Header from './Components/Header';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Login from './Components/Login';
import Register from './Components/Register';

import Protected from './Components/Protected';
import Product_List from './Components/Product_List';



function App() {
  return (
    <div >
      < BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/list" element={<Protected Cmp={Product_List} />} />
          <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
        </Routes>


      </BrowserRouter>
      


    </div>
  );
}

export default App;
