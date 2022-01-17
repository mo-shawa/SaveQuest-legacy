import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header"
import AuthPage from "./pages/AuthPage/AuthPage";
import MainAppPage from "./pages/MainAppPage/MainAppPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route, useNavigate } from "react-router-dom";




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

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      //if token is found but expired, redirect to login here
      let userDoc = JSON.parse(atob(token.split('.')[1])).user;
      setUser(userDoc)
      navigate('/app')
    } // would navigate to landing here if no token
  }, [])

  return (
    <div className="App">
      <Header user={user} />

      <Routes>
        <Route path='/auth' element={<AuthPage userLogout={userLogout} setUserInState={setUserInState} />} />
        <Route path='/app' element={<MainAppPage />} />
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </div>
  );

}

export default App;
