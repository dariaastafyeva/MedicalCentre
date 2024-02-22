import React from 'react'

import AdvertSection from '../components/AdvertSection'

import DecsriptionSection from '../components/DecsriptionSection'
import TeamGroup from '../components/TeamGroup'
import Articles from '../components/Articles'
import SubscribeForm from '../components/SubscribeForm'
import Booking from '../components/Booking'

const Home = () => {
  return (
    <div className='content--wrapper'>
      <AdvertSection />
      <DecsriptionSection />
      <TeamGroup />
      <Articles />
      <SubscribeForm />
      <Booking />
    </div>
  )
}

export default Home