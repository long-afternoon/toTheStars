import { useState } from 'react'
import StarWrite from './Write'

import { Routes, Route } from 'react-router-dom'
import Sky from './Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Sky/>}>
        
      </Route>
    </Routes>
  )
}

export default App
