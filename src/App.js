import React from "react";
import './App.css';
import Home from './pages/Home_Task/Home.js';
import Header from "./components/Header_Components/Head2"; 
import Footer from "./components/Footer_Components/Footer";
import ProjectPage from "./pages/Project/Project.js";
import PostProject from "./pages/Post_Project/PostProject.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/postproject" element={<PostProject />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
