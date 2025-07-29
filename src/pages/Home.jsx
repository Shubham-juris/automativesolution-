import React from 'react'
import HeroSection from '../components/HomeComponent/Hero'
import WhyChooseUsSection from '../components/HomeComponent/WhyChooseSection'
import ServicesTabs from '../components/HomeComponent/ContentMap'
import ContactCTASection from '../components/HomeComponent/ContactCTASection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <WhyChooseUsSection/>
      <ServicesTabs/>
      <ContactCTASection/>
    </>
  )
}

export default Home
