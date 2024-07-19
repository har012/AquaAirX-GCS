import React from 'react'
import './AdsbServer.css'

function AdsbServer() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="opq">Note: These settings are not meant for use with an ASDB transponder which is situated on the vehicle</div>

        <div className="opq">
          <input className="checkbox" type="checkbox" />
          <div>Connect to ADSB SBS server</div>
        </div>

        <div className="opq">
          <div>Host Address</div>
          <input className="hstaddinp" type='text'/>
        </div>
        
        <div className="opq">
          <div>Server Port</div>
          <input className="servprtinp" type='text'/>
        </div>
      </div>
    </div>
  )
}

export default AdsbServer;