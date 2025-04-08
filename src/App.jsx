import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Blog from './components/Blog'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Header />
      
      <div id="home">
        <Home />
      </div>

      <Hero />

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Service />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default App
