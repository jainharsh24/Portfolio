import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
