import AboutSection from '../components/About'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import HomeSection from '../components/Home';
import SkillsCertificatesPage from '../components/SkillCertificate';
import { Footer, Header } from '../components/Header';
import ProjectsPage from '../components/Projects';
import ContactPage from '../components/Contact';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import ServicesSection from '../components/Services';
import ExperienceSection from '../components/Experience';
import { CustomCursor } from '../customHooks/customCursor';

function App() {

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<AboutSection />} />
  //         <Route path="/Home" element={<HomeSection />} />
  //         <Route path="/Skills" element={<SkillsCertificatesPage />} />
  //         <Route path="/Projects" element={<ProjectsPage />} />
  //         <Route path="/Services" element={<ServicesSection />} />
  //         <Route path="/Contact" element={<ContactPage />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // )

  return (
    <>
      <CustomCursor />
      <Header />
      <section id="Home"><HomeSection /></section>
      <section id="About"><AboutSection /></section>
      <section id="Journey"><ExperienceSection /></section>
      <section id="Skills"><SkillsCertificatesPage /></section>
      <section id="Projects"><ProjectsPage /></section>
      <section id="Services"><ServicesSection /></section>
      <section id="Contact"><ContactPage /></section>
      <Footer />
    </>
  )
}

export default App
//           <AboutSection />
//           <HomeSection />
//           <SkillsCertificatesPage />
//           <ProjectsPage />
//           <ContactPage />