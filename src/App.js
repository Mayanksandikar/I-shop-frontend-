import Home from './Component/Home';
import './App.css';
import Header from './Header/Header';

import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Mobile from './Component/Mobile';
import Ipad from './Component/Ipad';

import MacBook from './Component/MacBook';
import Accessories from './Component/Accessories';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/mobile' element={<Mobile />}/>
          <Route path='/ipad' element={<Ipad />}/>
          <Route path='/macbook' element={<MacBook />}/>
          <Route path='/accessories' element={<Accessories />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
