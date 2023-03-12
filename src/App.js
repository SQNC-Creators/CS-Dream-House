import logo from './logo.svg';
import NavBar from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/AboutUs/about';
import Projects from './Pages/Projects/projects';
import Contact from './Pages/ContactUs/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
