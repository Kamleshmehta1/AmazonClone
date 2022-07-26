import "./App.css";
import React, { useEffect } from "react";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./Components/CheckOut";
import Home from "./Components/Home";
import { UseStateValue } from "./Components/StateProvider";
import { auth } from "./Components/Firebase";

function App() {
  const [{ user }, dispatch] = UseStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        // login
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        // log out
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      // cleanup opeartions
      unsubscribe();
    };
  }, []);
  console.log("❤️❤️" + user);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
