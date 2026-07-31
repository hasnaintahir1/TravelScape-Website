import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './Compnonents/Navbar/Navbar'

import Home from './Pages/Home/Home'
import AiPLanner from './Pages/AI-Traveler-Planner/Ai'
import Explore from './Pages/Explore/Explore'
import Blog from './Pages/Blog/Blog'
import Faq from './Pages/FAQ/Faq'
import Group from './Pages/GroupTripPlanner/Group'
import Road from './Pages/RoadTripPlanner/Road'

import Footer from './Compnonents/Footer/Footer'

const App = () => {
  const location = useLocation();

  const isAiPage = location.pathname === '/aiPlanner'

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aiPlanner' element={<AiPLanner />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/groupTrip' element={<Group />} />
        <Route path="/roadTrip" element={<Road />} />
      </Routes>
    {!isAiPage &&  <Footer />}
    </>
  )
}

export default App;