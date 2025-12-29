import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SplashCursor from "./components/SplashCursor"

import WhatsAppWidget from './components/WhatsAppWidget'; 


function App() {
 

  return (
    <>
    <SplashCursor />
<Navbar/>
<Hero/>
<About/>
<Projects/>
<Skills/>
<Education/>
<Contact/>
<Footer/>
<WhatsAppWidget />
    </>
  )
}

export default App
