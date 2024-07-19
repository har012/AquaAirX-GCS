import React from 'react';
import './Sidebar.css';
import { LuArrowRightToLine } from "react-icons/lu";
import { LuArrowLeftToLine } from "react-icons/lu";
import { TiPlus } from "react-icons/ti";


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? <LuArrowRightToLine className='sidebararrow'/> : <LuArrowLeftToLine className='sidebararrow' />}
            </button>
            
            <div className={`sidebar `}>
                <div className='vehicleinfo'>
                    <div className='vehicleid'>
                        <div className='vehiclepng'></div>
                        <div className='iddisplay'></div>
                    </div>
                    <div className='vehicledata'>
                        <li>Longitude: 38.8951</li>
                        <li>Latitude: -77.0364</li>
                        <li>Altitude: 150m</li>
                        <li>Depth: 0</li>
                    </div>
                </div>

                <div className='datasection'>
                    <div className='adddata'>
                        <div className='plus'><TiPlus /></div>
                    </div>
                    <div className='datas'>
                        <p>Battery Status</p>
                        <p>Battery: 0</p>
                        <p>Charge status: ok</p>
                        <p>Yaw: 0</p>
                        <p>Dist to wp: 0m</p>
                        <p>Dist to MAV: 0m</p>
                        <p>RC RSSI: 100%</p>
                        <p>Telemetry RSSI Status:</p>
                        <p>Remote Noise: 0</p>
                        <p>GPS Status:</p>
                        <p>GPS CountL 0</p>
                        <p>GPS Lock : 3D lock</p>
                        <p>HDOP: 0.0</p>
                        <p>VDOP: 0.0</p>
                        <p>Course over ground: 0.0</p>
                    </div>
                </div>

                <div className='notification'>
                    <div className='notihead'>Notification:</div>
                    <div className='notibody'></div>
                </div>

                <div className='sonarview'>Sonar View</div>
            </div>
        </div>
    );
};
  
export default Sidebar;