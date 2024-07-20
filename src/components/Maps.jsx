// // import React, { useState } from 'react';
// // import { MapContainer, TileLayer } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import './Maps.css';

// // const Maps = ({ isFullScreen, onToggleFullScreen }) => {
// //   const [rectSize, setRectSize] = useState({ width: 350, height: 225 });
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });

// //   const handleMouseDown = (e) => {
// //     setIsDragging(true);
// //     setInitialMousePos({ x: e.clientX, y: e.clientY });
// //   };

// //   const handleMouseMove = (e) => {
// //     if (isDragging) {
// //       const newWidth = rectSize.width + (e.clientX - initialMousePos.x);
// //       const newHeight = rectSize.height - (e.clientY - initialMousePos.y);
// //       setRectSize({
// //         width: newWidth > 50 ? newWidth : 50,
// //         height: newHeight > 50 ? newHeight : 50,
// //       });
// //       setInitialMousePos({ x: e.clientX, y: e.clientY });
// //     }
// //   };

// //   const handleMouseUp = () => {
// //     setIsDragging(false);
// //   };

// //   const handleClick = () => {
// //     onToggleFullScreen();
// //   };

// //   const mapElement = (
// //     <MapContainer
// //       center={[13.13692895, 77.5963159]}
// //       zoom={13}
// //       scrollWheelZoom={false}
// //       style={{ height: '100%', width: '100%' }}
// //       className='mapframe'
// //     >
// //       <TileLayer
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //       />
// //     </MapContainer>
// //   );

// //   return isFullScreen ? (
// //     <div onClick={handleClick} className="maps-full-screen">
// //       {mapElement}
// //     </div>
// //   ) : (
// //     <div
// //       className="resizable-rectangle"
// //       style={{ width: `${rectSize.width}px`, height: `${rectSize.height}px`, position: 'absolute', bottom: 0, left: 0 }}
// //       onMouseDown={handleMouseDown}
// //       onMouseMove={handleMouseMove}
// //       onMouseUp={handleMouseUp}
// //     >
// //       <div className="maps-small-content">
// //         <div className='smallmapcover' onClick={handleClick}></div>
// //         {mapElement}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Maps;





// import React, { useState } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './Maps.css';
// import { FaPaperPlane } from "react-icons/fa";
// import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';

// const Maps = ({ isFullScreen, onToggleFullScreen }) => {
//   const [rectSize, setRectSize] = useState({ width: 350, height: 225 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
//   const [mouseDownTime, setMouseDownTime] = useState(0);

//   const navigate = useNavigate();

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

//   const handlePlanClick = () => {
//     navigate('/plan');
//   }

//   const mapElement = (
//     <MapContainer
//       center={[13.13692895, 77.5963159]}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: '100%', width: '100%' }}
//       className='mapframe'
//       zoomControl={false}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//     </MapContainer>
//   );

//   return isFullScreen ? (
//     <div>
//       <div
//         className="maps-full-screen"
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       >
//         {mapElement}
//       </div>
//       {/* <div className='map-content'>
//         <div className='plan-btn' onClick={handlePlanClick}>
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
//   ) : (
//     <div
//       className="resizable-rectangle"
//       style={{ width: `${rectSize.width}px`, height: `${rectSize.height}px`, position: 'absolute', bottom: 0, left: 0 }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <div className="maps-small-content">
//         {/* <div className='smallmapcover'></div> */}
//         {mapElement}
//       </div>
//     </div>
//   );
// };

// export default Maps;





import React from 'react'
import './Maps.css';
import { MdOutlineLaunch } from "react-icons/md";

function Maps() {
  return (
    <div className='map-body'>
      <div></div>
      <div className='extend-btn'>
        <MdOutlineLaunch className='extend-icon' />
      </div>
    </div>
  );
}

export default Maps