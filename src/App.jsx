


import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Porfolio/Portfolio';
import Banner from './components/Banner';
import Email from './components/Contact Us/Email';
import Footer from './components/Footer';
import React from 'react'
import { ToastContainer } from 'react-toastify';

function App() {
  // document.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // })
  return (
    <>
      <>
        <ToastContainer theme='dark' />


        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <Banner />
        <Email />

        <Footer />
      </>


    </>

  )
}

export default App
