
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


//pages and components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'
import LandingPage from './pages/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='login'>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
