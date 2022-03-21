import './App.css';
import {
  Routes,
  Route,
  useLocation,} 
  from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUsPage";
import Project from "./pages/ProjectPage";
import Main from "./pages/MainPage";
import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation();
  return (
    <div className="App">
    
      <Header/>
      <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Main/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="projects" element={<Project/>}/>
      </Routes> 
      </AnimatePresence>
      <Footer/>
    
    </div>
  );
}

// Had to wrap <App> in index.js in HashRouter/BrowerRouter instead of my routes here

export default App;
