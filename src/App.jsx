import { useState, useContext } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import ScrollTop from './components/ScrollTop/ScrollTop'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import { ThemeContext } from './context/theme'

function App() {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <>
      <div id='top' className={`${themeName} app`}>
        <Header />
        <main>  
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ScrollTop />
        <Footer />
      </div>
    </>
  )
}

export default App
