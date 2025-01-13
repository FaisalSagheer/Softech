


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
import Loading from './components/Loading';
import { BrowserRouter, Routes, Route, useNavigation} from 'react-router-dom';
import React from 'react'

function App() {
  // document.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault();
  // })
  // const [preLoading, setLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  // },)

  // const navigation = useNavigation();
  // console.log(navigation)

  // if (navigation.state === "loading") return <Loading />
  return (
    <>
      {/* {preLoading ? <Loading /> : */}
      <>
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
      {/* } */}
    </>

  )
}

export default App
