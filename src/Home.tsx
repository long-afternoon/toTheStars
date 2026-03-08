import { useState } from 'react'
import StarWrite from './Write'
import { Routes, Route } from 'react-router-dom'
import './Sky.css'

function Sky() {

  const [Stars, setStars] = useState(existingStars);


  return (
    <div className='sky'>
      
    <div className="parent">
        <div className="div1">1</div>
        <div className="div2">2</div>
        <div className="div3">3</div>
        <div className="div4">4</div>
        <div className="div5">5</div>
        <div className="div6">6</div>
        <div className="div7">7</div>
        <div className="div8">8</div>
        <div className="div9">9</div>
        <div className="div10">10</div>
        <div className="div11">11</div>
        <div className="div12">12</div>
        <div className="div13">13</div>
        <div className="div14">14</div>
        <div className="div15">15</div>
        <div className="div16">16</div>
        <div className="div17">17</div>
        <div className="div18">18</div>
        <div className="div19">19</div>
        <div className="div20">20</div>
        <div className="div21">21</div>
        <div className="div22">22</div>
        <div className="div23">23</div>
        <div className="div24">24</div>
        <div className="div25">25</div>
        <div className="div26">26</div>
        <div className="div27">27</div>
        <div className="div28">28</div>
        <div className="div29">29</div>
        <div className="div30">30</div>
        <div className="div31">31</div>
        <div className="div32">32</div>
        <div className="div33">33</div>
        <div className="div34">34</div>
        <div className="div35">35</div>
        <div className="div36">36</div>
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