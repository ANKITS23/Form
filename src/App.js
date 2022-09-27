import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";


const App  = () => {
  
  return (
    <BrowserRouter>
    <NavBar />
  <Routes>
    <Route>
      <Route path="/" element={<Home />} />   
      <Route path="/about" element={<About />} />  
      <Route path="/contact" element={<Contact />} />  
      <Route path="/help" element={<Help/>} />  
      
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App;
