import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookTurf from './pages/BookTurf';
import UserSignUp from './pages/User_SignUp';
import UserLogin from './pages/User_Login';
import OwnerSignUp from './pages/Owner_SignUp';
import OwnerLogin from './pages/Owner_Login';
import UserLogOut from './pages/User_LogOut';
import OwnerLogOut from './pages/Owner_LogOut';
import Dashboard from './pages/Dashboard';
import Dashboard_Add_Turf from './pages/Dashboard_Add_Turf';
import Dashboard_Navbar from './pages/Dashboard_Navbar';
import TurfDetail from "./pages/Turf_Detail";
import BookingPage from './pages/BookingPage';
import Dashboard_Show_Bookings from './pages/Dashboard_Show_Bookings';
import Track_Bookings from './pages/Track_Bookings';
import Dashboard_Update from './pages/Dashboard_Update';

// Main application layout
function MainApp() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Navbar and Footer based on the current route */}
      {!location.pathname.startsWith('/dashboard') ? <Navbar /> : <Dashboard_Navbar/>}
      
      {/* Main Content */}
      <div className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookTurf" element={<BookTurf />} />
          <Route path="/user_signUp" element={<UserSignUp />} />
          <Route path="/user_login" element={<UserLogin />} />
          <Route path='/user_logout' element={<UserLogOut />} />
          <Route path="/owner_signUp" element={<OwnerSignUp />} />
          <Route path="/owner_login" element={<OwnerLogin />} />
          <Route path='/owner_logout' element={<OwnerLogOut />} />
          <Route path="/turf/:id" element={<TurfDetail/>} />
          <Route path='/book/:id' element={<BookingPage/>}/>
          <Route path='/track_my_bookings' element={<Track_Bookings/>}/>
          
          {/* Dashboard routes */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/add_turf' element={<Dashboard_Add_Turf />} />
          <Route path='/dashboard/dash_bookings' element={<Dashboard_Show_Bookings />} />
          <Route path='/dashboard/update/:id' element={<Dashboard_Update/>}/>
        </Routes>
      </div>

      {!location.pathname.startsWith('/dashboard') && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;

