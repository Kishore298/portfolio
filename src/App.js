import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';



function App() {
  return (
   <>
   <NavBar />
   <Home />
   <About />
   <Skills />
   <Projects />
   <Contact />
   <Footer />
   </>
  );
}

export default App;
