import { useState } from 'react'
import StarWrite from './Write'
import { Routes, Route } from 'react-router-dom'
import './Sky.css'

function Sky() {

  const [Stars, setStars] = useState(existingStars);


  return (
    <div className='sky'>


      <div className="parent">
        {Stars.map((star) => {
          return <div className={`div${star.id}`}></div>
        })}

        {/* <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <div className="div6"></div>
        <div className="div7"></div>
        <div className="div8"></div>
        <div className="div9"></div>
        <div className="div10"></div>
        <div className="div11"></div>
        <div className="div12"></div>
        <div className="div13"></div>
        <div className="div14"></div>
        <div className="div15"></div>
        <div className="div16"></div>
        <div className="div17"></div>
        <div className="div18"></div>
        <div className="div19"></div>
        <div className="div20"></div>
        <div className="div21"></div>
        <div className="div22"></div>
        <div className="div23"></div>
        <div className="div24"></div>
        <div className="div25"></div>
        <div className="div26"></div>
        <div className="div27"></div>
        <div className="div28"></div>
        <div className="div29"></div>
        <div className="div30"></div>
        <div className="div31"></div>
        <div className="div32"></div>
        <div className="div33"></div>
        <div className="div34"></div>
        <div className="div35"></div>
        <div className="div36"></div>
        <div className="div37"></div>
        <div className="div38"></div>
        <div className="div39"></div>
        <div className="div40"></div>
        <div className="div41"></div>
        <div className="div42"></div>
        <div className="div43"></div>
        <div className="div44"></div>
        <div className="div45"></div>
        <div className="div46"></div>
        <div className="div47"></div>
        <div className="div48"></div> */}
      </div>


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