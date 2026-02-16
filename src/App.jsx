// React Router DOM:
import { Routes, Route } from "react-router-dom";
// Pages:
import HomePage from "@pages/HomePage";
import ProjectsPage from "@pages/ProjectsPage";
import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import CareersPage from "@pages/CareersPage";
import BlogsPage from "@pages/BlogsPage";
// Common Components:
import NavigraitonBar from "@components/Layout/NavigationBar";
import CTA from "@components/Layout/CTA";
import Footer from "@components/Layout/Footer";

function App() {
  return (
    <div className="App bg-grey-06 text-white min-h-screen">
      {/* Navigation Bar */}
      <NavigraitonBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;