import React from 'react'
import './Units.css';

function Units() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="xyz">
          <div>Horizontal Distance</div>
          <select name="recordfileformat" id='hrztdistdrpbox'>
            <option value="mp4">Meter</option>
            <option value="avi">Kilometer</option>
            <option value="mov">Mile</option>
          </select>
        </div>
        
        <div className="xyz">
          <div>Vertical Distance</div>
          <select name="recordfileformat" id='vertdistdrpbox'>
            <option value="mp4">Meter</option>
            <option value="avi">Kilometer</option>
            <option value="mov">Mile</option>
          </select>
        </div>

        <div className="xyz">
          <div>Area</div>
          <select name="recordfileformat" id='areadrpbox'>
            <option value="mp4">Square Meter</option>
            <option value="avi">Acre</option>
            <option value="mov">Hectare</option>
          </select>
        </div>

        <div className="xyz">
          <div>Speed</div>
          <select name="recordfileformat" id='spddrpbox'>
            <option value="mp4">km/h</option>
            <option value="avi">mile/h</option>
            <option value="mov">m/s</option>
          </select>
        </div>

        <div className="xyz">
          <div>Temperature</div>
          <select name="recordfileformat" id='tempdrpbox'>
            <option value="mp4">Celsius</option>
            <option value="avi">Fahrenheit</option>
            <option value="mov">Kelvin</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Units;