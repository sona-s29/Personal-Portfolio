import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {


  return (
    <>
      <div>
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
