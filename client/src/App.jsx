
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


//pages and components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'
import LandingPage from './pages/landing-page/LandingPage';
import SubmitEvent  from './pages/home/SubmitEvent';
import Profile from './pages/profile/Profile';
import Logout from './pages/login/Logout'
import Market from './pages/marketplace/Market';
import InitialNav from './components/InitialNav';
import MarketPost from './pages/marketplace/Post'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signup"
            element={<>
                <InitialNav />
                <Signup />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <InitialNav />
                <Login />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/home/post"
            element={
              <>
                <SubmitEvent />
              </>
            }
          />
        <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
          <Route
            path="/logout"
            element={
              <>
                <Logout />
              </>
            }
          />
          <Route
            path="/market"
            element={
              <>
                <Navbar/>
                <Market/>
              </>
            }
          />
          <Route
            path="/market/post"
            element={
              <>
                <MarketPost/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
