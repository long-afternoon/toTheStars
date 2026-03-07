import { useState } from 'react'
import StarWrite from './Write'
import { Routes, Route } from 'react-router-dom'
import './Sky.css'

function Sky() {


  return (
    <div className='sky'>

    </div>
  )
}

const existingStars = [
  {
    id: 1,
    date: "1/1/1",
    time: "12:00:00",
    thought: "feeling so dumb!"

  },
  {
    id: 2,
    date: "2/2/2",
    time: "11:00:00",
    thought: "great, feeling great",

  }
]

export default Sky