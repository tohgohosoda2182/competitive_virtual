import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import AddProblem from "./components/AddProblem";
import { useState } from "react";
import "./App.css"
function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className="Root">
    <Router >
      <Navbar isAuth = {isAuth}/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/addproblem" element = {<AddProblem isAuth = {isAuth}/>}></Route>
        <Route path = "/login" element = {<Login setIsAuth = {setIsAuth}/>}></Route>
        <Route path = "/logout" element = {<Logout setIsAuth = {setIsAuth}/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
