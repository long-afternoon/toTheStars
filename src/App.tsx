import { useState } from 'react'
import StarWrite from './Write'

import { Routes, Route } from 'react-router-dom'
import Sky from './Home'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

function App() {

  return (
    // <Routes>
    //   <Route path='/' element={<Sky/>}>
        
    //   </Route>
    // </Routes>
    <>
      {/* <Header/> */}
      <Sky/>
      {/* <Menu/>
      <Footer/> */}
    </>
  )
}

export default App
