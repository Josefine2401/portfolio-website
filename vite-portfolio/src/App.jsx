import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PixelField from './pages/Launch_Page/pixelField.jsx';
import Launch from './pages/Launch_Page/launch.jsx';
import Showcase from './pages/Projects/showcase.jsx';
import AboutMe from './pages/aboutMe/aboutMe.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PixelField />
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/projects" element={<Showcase />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;