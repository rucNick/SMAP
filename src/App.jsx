import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import ProjectsArticles from './pages/ProjectsArticles';
import Resources from './pages/Resources';

import './styles/reset.css';
import './styles/navbar.css';
import './styles/styles.css';
import './styles/about.css';
import './styles/contact.css';
import './styles/donate.css'; 
import './styles/projects-articles.css'; 
import './styles/responsive.css';
import './styles/resources.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/projects" element={<ProjectsArticles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;