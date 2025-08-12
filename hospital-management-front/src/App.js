import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginAndRegisterPage from "./pages/sharedPages/LoginAndRegisterPage";
import HomePage from "./pages/Home/homePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginAndRegisterPage />} />
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
