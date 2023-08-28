
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";


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
import AccountType from './pages/login/AccountType';
import Ground from './pages/grounds/Ground';
import GroundPost from './pages/ground-post/PostBasic'
import GroundPostTime from './pages/ground-post/PostTime'
import Tournaments from './pages/tournaments/Tournaments';
import EventPost from './pages/tournaments/EventPost';
import ESports from './pages/eSports/eSports';
import GroundProfile from './pages/grounds/groundProfile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signup/:accountType"
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
          <Route
            path="/Account-type"
            element={
              <>
                <InitialNav/>
                <AccountType/>
              </>
            }
          />
          <Route
            path="/ground"
            element={
              <>
                <Navbar/>
                <Ground/>
              </>
            }
          />
          <Route
            path="/ground-post"
            element={
              <>
                <Navbar/>
                <GroundPost/>
              </>
            }
          />
          <Route
            path="/ground-post-time/:id"
            element={
              <>
                <Navbar/>
                <GroundPostTime/>
              </>
            }
          />
          <Route
            path="/groundProfile/:id"
            element={
              <>
                <Navbar/>
                <GroundProfile/>
              </>
            }
          />
          <Route
            path="/tournaments"
            element={
              <>
                <Navbar/>
                <Tournaments/>
              </>
            }
          />
            <Route
            path="/tournaments/post"
            element={
              <>
                <Navbar/>
                <EventPost/>
              </>
            }
          />
          <Route
            path="/eSports"
            element={
              <>
                <Navbar/>
                <ESports/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
