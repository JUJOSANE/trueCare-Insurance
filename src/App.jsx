import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedServices from "./components/FeaturedServices";
import AllServices from "./components/AllServices";
import Process from './components/Process';
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar/>
      <Hero/>
      <FeaturedServices/>
      <AllServices/>
      <Benefits/>
      <Process/>
      <Contact/>
      <Footer/>

    </main>
  );
}

export default App
