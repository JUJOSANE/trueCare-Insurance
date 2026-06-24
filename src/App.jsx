import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import SchedulePage from "./pages/SchedulePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
  <BrowserRouter>
      <ScrollToTop />

    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>

      <Footer />
    </main>
  </BrowserRouter>
  );
}

export default App;
