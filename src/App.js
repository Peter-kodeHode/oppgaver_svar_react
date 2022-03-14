import './App.css';
import {
  HashRouter,
  Routes,
  Route,} 
  from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUsPage";
import Project from "./pages/ProjectPage";
import Main from "./pages/MainPage";

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="projects" element={<Project/>}/>
      </Routes> 
      <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
