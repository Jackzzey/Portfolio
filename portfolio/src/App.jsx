import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhyHire from './pages/WhyHire';
import Projects from './pages/Projects';
import About from './pages/About';
import All from './components/project/All';
import Backend from './components/project/All';
import Frontend from './components/project/Frontend';
import Games from './components/project/Games';
import Other from './components/project/Other';
import Contact from './pages/Contact';
import Cv from './pages/Cv';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhyHire" element={<WhyHire />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="all" element={<All />} />
          <Route path="backend" element={<Backend />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="games" element={<Games />} />
          <Route path="other" element={<Other />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
