


import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Porfolio/Portfolio';
import Banner from './components/Banner';
import Email from './components/Contact Us/Email';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { Element } from 'react-scroll';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'
import { ToastContainer } from 'react-toastify';

function App() {
  document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
  return (
    <>
      <>
      <ToastContainer theme='dark'/>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Element name="Hero">
                    <Hero />
                  </Element>
                  <Element name="AboutUs">
                    <AboutUs />
                  </Element>
                  <Element name="Services">
                    <Services />
                  </Element>
                  <Element name="Portfolio">
                    <Portfolio />
                  </Element>
                  <Banner />
                  <Element name="Email">
                    <Email />
                  </Element>
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    </>

  )
}

export default App
