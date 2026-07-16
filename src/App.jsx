import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import './App.css'; // Import your global styles here
// 1. Import all your page components here
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
// import Events from './pages/Events.jsx';
// import Volunteer from './pages/Volunteer.jsx';
import Support from './pages/Support.jsx';
import Contact from './pages/Contact.jsx';

// Dropdown Project Pages imports
import Education from './pages/projects/Education.jsx';
import Medical from './pages/projects/Medical.jsx';
import FeaturedInitiatives from './components/layout/FeaturedInitiative.jsx';
import Employment from './pages/projects/Employment.jsx';
import Empowerment from './pages/projects/Empowerment.jsx';
import Mentorship from './pages/projects/Mentorship.jsx';
import Training from './pages/projects/Training.jsx';
import Volunteer from './pages/Volunteer.jsx'; // Import Volunteer page

function App() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Dropdown Pages (Matching your NavLink paths) */}
          <Route path="/projects/education" element={<Education />} />
          <Route path="/projects/featured" element={<FeaturedInitiatives />} />
          <Route path="/projects/medical" element={<Medical />} />
          <Route path="/projects/employment" element={<Employment />} />
          <Route path="/projects/empowerment" element={<Empowerment />} />
          <Route path="/projects/mentorship" element={<Mentorship />} />
          <Route path="/projects/training" element={<Training />} />

          {/* Fallback route - catches broken links and sends them home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;