import React from 'react'
import './PlanView.css';

function PlanView() {
  return (
    <div className="container">
      <div className='wrapper'>
        <div className="xyz">
          <div>Default Mission Altitude</div>
          <input className="defmisaltinp" type='text'/>
        </div>

        <div className="xyz">
          <div>VTOL Transition Distance</div>
          <input className="vtoltransdistinp" type='text'/>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Enable Custom Actions</div>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Enable Custom Actions</div>
        </div>
      </div>
    </div>
  )
}

export default PlanView;