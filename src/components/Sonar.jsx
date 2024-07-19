import React from 'react'
import './Sonar.css';
import { MdOutlineLaunch } from "react-icons/md";

function Sonar() {
    return (
      <div className='sonar-body'>
        <div></div>
        <div className='extend-btn'>
          <MdOutlineLaunch className='extend-icon' />
        </div>
      </div>
    );
}

export default Sonar