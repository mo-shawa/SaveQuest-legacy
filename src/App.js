import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header"
import AuthPage from "./pages/AuthPage/AuthPage";
import MainAppPage from "./pages/MainAppPage/MainAppPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";




function App() {

  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData);
  };

  const userLogout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  const ProtectedRoute = () => {
    return user ? <Outlet /> : <Navigate to='/auth' />
  }

  // useEffect(() => {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     //if token is found but expired, redirect to login here
  //     let userDoc = JSON.parse(atob(token.split('.')[1])).user;
  //     setUser(userDoc)
  //     navigate('/app')
  //   } else {
  //     navigate('/auth')
  //   }
  // }, [])

  return (
    <div className="App">
      <Header user={user} userLogout={userLogout} />

      <Routes>
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/auth' element={<AuthPage userLogout={userLogout} setUserInState={setUserInState} />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/app' element={<MainAppPage setUserInState={setUserInState} user={user} />} />
        </Route>
      </Routes>
    </div>
  );

}

export default App;
