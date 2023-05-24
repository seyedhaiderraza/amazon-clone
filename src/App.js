
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
function App() {
  return (
    <>
   
    <Router>
    <Header/>
    <div className="App">
   
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/checkout" element={<Checkout/>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
   
    </div>
    </Router>
    </>
  );
}

export default App;
