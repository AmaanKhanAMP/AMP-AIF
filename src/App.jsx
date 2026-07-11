import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import './App.css'; // Import your global styles here
// 1. Import all your page components here
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
// import Events from './pages/Events.jsx';
// import Volunteer from './pages/Volunteer.jsx';
// import SupportUs from './pages/SupportUs.jsx';
// import Contact from './pages/Contact.jsx';

// Dropdown Project Pages imports
// import Education from './pages/projects/Education.jsx';
// import MedicalRelief from './pages/projects/MedicalRelief.jsx';
// import EmploymentSupport from './pages/projects/EmploymentSupport.jsx';
// import EconomicEmpowerment from './pages/projects/EconomicEmpowerment.jsx';
// import StudentMentorship from './pages/projects/StudentMentorship.jsx';
// import EmploymentTraining from './pages/projects/EmploymentTraining.jsx';

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
          {/* <Route path="/volunteer" element={<Volunteer />} /> */}
          {/* <Route path="/support-us" element={<SupportUs />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* Project Dropdown Pages (Matching your NavLink paths) */}
          {/* <Route path="/projects/education" element={<Education />} /> */}
          {/* <Route path="/projects/medical-relief" element={<MedicalRelief />} /> */}
          {/* <Route path="/projects/employment-support" element={<EmploymentSupport />} /> */}
          {/* <Route path="/projects/economic-empowerment" element={<EconomicEmpowerment />} /> */}
          {/* <Route path="/projects/student-mentorship" element={<StudentMentorship />} /> */}
          {/* <Route path="/projects/employment-training" element={<EmploymentTraining />} /> */}

          {/* Fallback route - catches broken links and sends them home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;