import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Success from "./Success";
import Signup from "./Signup";

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;