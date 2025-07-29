import React from 'react'
import AboutHero from '../components/About-us/AboutHero'
import MissionSection from '../components/About-us/MissionSection'
import WhyChooseUs from '../components/About-us/WhyChoose'
import StatsSection from '../components/About-us/StatsSection'
// import TeamSection from '../components/About-us/TeamSection'

const AboutUs = () => {
  return (
    <>
      <AboutHero/>
      <MissionSection/>
      <WhyChooseUs/>
      {/* <TeamSection/> */}
      <StatsSection/>
    </>
  )
}

export default AboutUs
