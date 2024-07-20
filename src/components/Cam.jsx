// import React, { useState } from 'react';
// import './Cam.css';

// const Cam = ({ isMapsFullScreen }) => {
//   const [rectSize, setRectSize] = useState({ width: 350, height: 225 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setInitialMousePos({ x: e.clientX, y: e.clientY });
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const newWidth = rectSize.width + (e.clientX - initialMousePos.x);
//       const newHeight = rectSize.height - (e.clientY - initialMousePos.y);
//       setRectSize({
//         width: newWidth > 50 ? newWidth : 50,
//         height: newHeight > 50 ? newHeight : 50,
//       });
//       setInitialMousePos({ x: e.clientX, y: e.clientY });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return isMapsFullScreen ? (
//     <div 
//       className='resizable-rectangle'
//       style={{ width: `${rectSize.width}px`, height: `${rectSize.height}px`, position: 'absolute', bottom: 0, left: 0 }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <div className="cam-small">
//         <p>Cam Content</p>
//       </div>
//     </div>
//   ) : (
//     <div className="cam-full-screen">
//       <p>Cam Content</p>
//     </div>
//   );
// };

// export default Cam;





// import React, { useState } from 'react';
// import './Cam.css';
// import { FaPaperPlane } from "react-icons/fa";
// import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";

// const Cam = ({ isMapsFullScreen }) => {
//   const [rectSize, setRectSize] = useState({ width: 350, height: 225 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
//   const [mouseDownTime, setMouseDownTime] = useState(0);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setInitialMousePos({ x: e.clientX, y: e.clientY });
//     setMouseDownTime(Date.now());
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const newWidth = rectSize.width + (e.clientX - initialMousePos.x);
//       const newHeight = rectSize.height - (e.clientY - initialMousePos.y);
//       setRectSize({
//         width: newWidth > 50 ? newWidth : 50,
//         height: newHeight > 50 ? newHeight : 50,
//       });
//       setInitialMousePos({ x: e.clientX, y: e.clientY });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     const timeElapsed = Date.now() - mouseDownTime;
//     if (timeElapsed < 200) {
//       handleClick();
//     }
//   };

//   const handleClick = () => {
//     onToggleFullScreen();
//   };

//   return isMapsFullScreen ? (
//     <div 
//       className='resizable-rectangle'
//       style={{ width: `${rectSize.width}px`, height: `${rectSize.height}px`, position: 'absolute', bottom: 0, left: 0 }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <div className="cam-small">
//         <p>Cam Content</p>
//       </div>
//     </div>
//   ) : (
//     <div className="cam-full-screen">
//       {/* <div className='cam-content'>
//         <div className='plan-btn'>
//           <FaPaperPlane />
//           <div>Plan</div>
//         </div>
//         <div className='takeoff-btn'>
//           <FaArrowTurnUp />
//           <div>Take Off</div>
//         </div>
//         <div className='return-btn'>
//           <FaArrowTurnDown />
//           <div>Return</div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Cam;







import React, { useState } from 'react'
import './Cam.css';
import { GiPathDistance } from "react-icons/gi";
import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import { LuRadar } from "react-icons/lu";
import { FaCamera, FaPlus } from "react-icons/fa6";
import { FcMiddleBattery } from "react-icons/fc";
import Maps from './Maps';
import Sonar from './Sonar';

function Cam() {

  return (
    <div className='cam-body'>
      <div className='home-icon-container'>
        <div className="plan-btn card">
          <GiPathDistance className='symbol' />
          <span className='label'>Plan</span>
        </div>
        <div className="takeoff-vehicle-btn card">
          <PiAirplaneTakeoffFill className='symbol' />
          <span className="label">Take off</span>
        </div>
        <div className="return-vehicle-btn card">
          <PiAirplaneLandingFill className='symbol' />
          <span className="label">Return</span>
        </div>
        <div className="radar-view-btn card">
          <LuRadar className='symbol' />
          <span className="label">Radar</span>
        </div>
        <div className="cam-view-btn card">
          <FaCamera className='symbol' />
          <span className="label">Cam</span>
        </div>
      </div>

      <div className='home-side'>
        <div>
          <div className='add-data-btn'>
            <FaPlus />
          </div>
          <div className='home-data-overlay'>
            <div className='battery-data'>
              <div>12.5V</div>
              <div>0.0A</div>
              <div className='battery-icon'><FcMiddleBattery /></div>
            </div>
            <div>00:01:45:97</div>
            <div>Rssi</div>
            <div>AS:00 GS:00</div>
            <div>0m</div>
            <div>0</div>
          </div>
        </div>

        <div>
          <Sonar />
        </div>

        <div>
          <Maps />
        </div>
      </div>
    </div>
  )
}

export default Cam