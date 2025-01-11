import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Portfolio from './components/Porfolio/Portfolio';
import Email from './components/Contact Us/Email';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Services/>
      <Portfolio/>
      <Banner/>
      <Email/>
      <Footer/>
    </>
  )
}

export default App
