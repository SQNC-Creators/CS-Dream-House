import logo from './logo.svg';
import NavBar from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/AboutUs/about';
import Projects from './Pages/Projects/projects';
import Contact from './Pages/ContactUs/contact';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
