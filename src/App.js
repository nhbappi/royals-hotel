
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Hotel from './Component/Hotel/Hotel';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">
       <Header></Header>
        <Routes>
          <Route path='/' element = {<Home></Home>}></Route>
          <Route path='/home' element = {<Home></Home>}></Route>
          <Route path='/hotel' element = {<Hotel></Hotel>}></Route>
          <Route path='/about' element = {<About></About>}></Route>
          <Route path='/blog' element = {<Blog></Blog>}></Route>
          <Route path='/contact' element = {<Contact></Contact>}></Route>
          <Route path='/login' element = {<Login></Login>}></Route>
        </Routes>
    </div>
  );
}

export default App;
