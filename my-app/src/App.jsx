import React from 'react'
import Hero from './components/Hero'
import Works from './components/works'
import AboutUs from './components/AboutUs'
import Testimonial from './components/Testimonial'
import WhyChooseUs from './components/WhyChooseUs'
import PricingSection from './components/PricingSection'
import ResumeCoachingSection from './components/ResumeCoachingSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
     <Works/>
     <AboutUs/>
     <Testimonial/>
     <WhyChooseUs/>
     <PricingSection/>
     <ResumeCoachingSection/>
     <Footer/>
    </div>
  )
}

export default App
