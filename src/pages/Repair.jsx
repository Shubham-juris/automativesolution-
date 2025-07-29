import React from 'react'
import RepairHero from '../components/repaire/RepairHero'
import RepairTypes from '../components/repaire/RepairTypes'
import ExpertMechanics from '../components/repaire/ExpertMechanics'
import BookingSteps from '../components/repaire/BookingSteps'
import RepairSupport from '../components/repaire/RepairSupport'
import RepairCTA from '../components/repaire/RepairCTA'

const Repair = () => {
  return (
    <>
      <RepairHero/>
      <ExpertMechanics/>
      <RepairTypes/>
      <BookingSteps/>
      <RepairSupport/>
      <RepairCTA/>
    </>
  )
}

export default Repair
