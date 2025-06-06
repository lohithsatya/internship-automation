import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function RootLayout() {
  return (
    <div>
        <Navigation/>
        <div style={{ minHeight: '70vh', padding: '0px' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
