
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-gray-100'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' Component={Home} ></Route>
      <Route exact path='/news' Component={News} ></Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
