import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';

import Login from './Components/Login/Login';
import Management from './Components/Management/Management/Management';
import NotFound from './Components/NotFound/NotFound ';
import FruitDetailes from './Components/Products/FruitsDetails/FruitDetailes/FruitDetailes';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={<FruitDetailes></FruitDetailes>}></Route>
        <Route path='/manageInventories' element={<Management></Management>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
