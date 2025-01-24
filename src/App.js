import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills, SpeakerSection } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import KampusPage from './pages/KampusPages'; // Ensure these components exist
import Beasiswa from './pages/BeasiswaPages';
import ContactAlumni from './pages/KontakPages';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<><Banner /><SpeakerSection /><Projects /></>} />
          <Route path="/kampus" element={<KampusPage />} />
          <Route path="/beasiswa" element={<Beasiswa />} />
          <Route path="/kontak" element={<ContactAlumni />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
