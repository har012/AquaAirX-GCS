import React from 'react'

function TeleLog() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Save log after each flight</div>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Save logs even if vehicle was not armed</div>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Save CSV log of telemetry data</div>
        </div>
      </div>
    </div>
  )
}

export default TeleLog;