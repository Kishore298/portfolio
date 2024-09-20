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
    <div className="App">
      <div className="desktop-only">
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <div className="mobile-message">
        <h1>Desktop Only</h1>
        <p>This website is best viewed on a desktop. Please switch to a desktop device or turn on desktop mode in your browser to continue.</p>
        <a href="https://www.enable-desktop-mode.com/">Learn how to enable desktop mode</a>
      </div>
    </div>
  );
}

export default App;
