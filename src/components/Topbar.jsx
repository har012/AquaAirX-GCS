import React from 'react';
// import './index.css';
import { Link } from 'react-router-dom';
import { BsGridFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { VscDebugDisconnect } from "react-icons/vsc";

function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarleft'>
        <div className='logo'>
          <img className="logoicon" src="src\assets\WhatsApp Image 2024-06-10 at 17.07.03_ee31fcfd.jpg" alt="" />
          <h2 className='logotext'>AquaAir<span>X</span></h2> 
        </div>

        <div className='topicons'>
          <BsGridFill className='menuicon'/>
          <Link to="/settings">
            <RiSettings3Fill className='settingicon'/>
          </Link>
        </div>
      </div>

      <div className='topbarright'>
        <div className='status'>
          <h2 className='connectionstatus'>Disconnected</h2>
          <VscDebugDisconnect className='connectionicon'/>
        </div>
      </div>
    </div>
  );
}

export default Topbar