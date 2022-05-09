import React from 'react'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
