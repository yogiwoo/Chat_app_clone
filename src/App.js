import React, { useEffect, useState } from 'react';
import { Route, Routes ,Navigate } from "react-router-dom";
import "./App.css";
import {Login,Register} from "./Components/Login";
import MainContainer from "./Components/MainContainer";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import CreateGroups from "./Components/CreateGroups";
import Users from "./Components/Users";
import Groups from "./Components/Groups";

function App() {
  const [LoggedIn,setLoggedIn]=useState(false)
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  })
  return (
    <div className="App">
      {/* <MainContainer /> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={LoggedIn?<Navigate to="/app/welcome" /> : <Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="app" element={<MainContainer/>}>
          <Route path="welcome" element={<Welcome/>}/>
          <Route path="chat" element={<ChatArea/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="groups" element={<Groups/>}/>
          <Route path="create-group" element={<CreateGroups/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
