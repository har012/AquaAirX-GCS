import React from 'react'
import './Autocon.css'

function Autocon() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="abc">
          <input className="checkbox" type="checkbox" />
          <div>Pixhawk</div>
          <input className="checkbox" type="checkbox" />
          <div>SIK Radio</div>
          <input className="checkbox" type="checkbox" />
          <div>PX4 Flow</div>
          <input className="checkbox" type="checkbox" />
          <div>LibrePilot</div>
          <input className="checkbox" type="checkbox" />
          <div>UDP</div>
          <input className="checkbox" type="checkbox" />
          <div>RTK GPS</div>
          <input className="checkbox" type="checkbox" />
          <div>Zero-Conf</div>
        </div>

        <div className="opq">
          <div>NMEA GPS Device</div>
          <select name="NMEA GPS Device" id='nmeagpsdev'>
            <option value="mp4">Disabled</option>
            <option value="avi">UDP Port</option>
            <option value="mov">\\.\COM3</option>
            <option value="mov">\\.\COM6</option>
            <option value="mov">\\.\COM8</option>
            <option value="mov">\\.\COM9</option>
            <option value="mov">\\.\COM7</option>
            <option value="mov">\\.\COM4</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Autocon;