// import React, { useState } from 'react';
// import './Setting.css';
// import { BsGridFill } from "react-icons/bs";
// import { VscDebugDisconnect } from "react-icons/vsc";
// import { RiArrowGoBackLine } from "react-icons/ri";
// import FlyView from './FlyView';
// import PlanView from './PlanView';
// import Units from './Units';
// import Miscellaneous from './Miscellaneous';
// import TeleLog from './TeleLog';
// import Autocon from './Autocon';
// import RtkGps from './RtkGps';
// import AdsbServer from './AdsbServer';

// function Settings() {
//   const [selectedPrimarySetting, setSelectedPrimarySetting] = useState(null);
//   const [selectedSecondarySetting, setSelectedSecondarySetting] = useState(null);

//   const handlePrimaryClick = (setting) => {
//     setSelectedPrimarySetting(setting);
//     setSelectedSecondarySetting(null);
//   };

//   const handleSecondaryClick = (setting) => {
//     setSelectedSecondarySetting(setting);
//   };

//   const renderSecondaryList = () => {
//     switch (selectedPrimarySetting) {
//       case 'General':
//         return (
//           <ul>
//             <li onClick={() => handleSecondaryClick('Fly View')}>Fly View</li>
//             <li onClick={() => handleSecondaryClick('Plan View')}>Plan View</li>
//             <li onClick={() => handleSecondaryClick('Units')}>Units</li>
//             <li onClick={() => handleSecondaryClick('Miscellaneous')}>Miscellaneous</li>
//             <li onClick={() => handleSecondaryClick('Telemetry Logs from Vehicle')}>Telemetry Logs from Vehicle</li>
//             <li onClick={() => handleSecondaryClick('AutoConnect to Device')}>AutoConnect to Device</li>
//             <li onClick={() => handleSecondaryClick('RTK GPS')}>RTK GPS</li>
//             <li onClick={() => handleSecondaryClick('ADSB Server')}>ADSB Server</li>
//           </ul>
//         );
//       case 'Comm Links':
//         return (
//           <ul>
//             <li onClick={() => handleSecondaryClick('Add+')}>Add+</li>
//             <li onClick={() => handleSecondaryClick('Edit')}>Edit</li>
//             <li onClick={() => handleSecondaryClick('Delete')}>Delete</li>
//             <li onClick={() => handleSecondaryClick('Connect')}>Connect</li>
//             <li onClick={() => handleSecondaryClick('Disconnect')}>Disconnect</li>
//           </ul>
//         );
//       case 'Offline Maps':
//         return (
//           <ul>
//             <li onClick={() => handleSecondaryClick('Import')}>Import</li>
//             <li onClick={() => handleSecondaryClick('Export')}>Export</li>
//             <li onClick={() => handleSecondaryClick('Options')}>Options</li>
//           </ul>
//         );
//       case 'MAVLink':
//         return (
//           <ul>
//             <li onClick={() => handleSecondaryClick('Ground Station')}>Ground Station</li>
//             <li onClick={() => handleSecondaryClick('Mavlink Link Status (Current Vehicle)')}>Mavlink Link Status (Current Vehicle)</li>
//             <li onClick={() => handleSecondaryClick('Saved Log Files')}>Saved Log Files</li>
//           </ul>
//         );
//       case 'Console':
//         return (
//           <ul>
//             <li onClick={() => handleSecondaryClick('Console Setting 1')}>Console Setting 1</li>
//             <li onClick={() => handleSecondaryClick('Console Setting 2')}>Console Setting 2</li>
//           </ul>
//         );
//       default:
//         return <p>Please select a setting from the primary list.</p>;
//     }
//   };

//   const renderContent = () => {
//     switch (selectedSecondarySetting) {
//       case 'Fly View':
//         return <FlyView />;
//       case 'Plan View':
//         return <PlanView />;
//       case 'Units':
//         return <Units />;
//       case 'Miscellaneous':
//         return <Miscellaneous />;
//       case 'Telemetry Logs from Vehicle':
//         return <TeleLog />;
//       case 'AutoConnect to Device':
//         return <Autocon />;
//       case 'RTK GPS':
//         return <RtkGps />;
//       case 'ADSB Server':
//         return <AdsbServer />;
//       default:
//         return <p>Select an option from the left to view details.</p>;
//     }
//   };

//   return (
//     <>
//       <div className='topbar'>
//         <div className='topbarleft'>
//           <div className='logo'>
//             <img className="logoicon" src="src/assets/WhatsApp Image 2024-06-10 at 17.07.03_ee31fcfd.jpg" alt="" />
//             <h2 className='logotext'>AquaAir<span>X</span></h2>
//           </div>
//           <div className='topicons'>
//             <BsGridFill className='menuicon' />
//           </div>
//         </div>
//         <div className='topbarright'>
//           <div className='status'>
//             <h2 className='connectionstatus'>Disconnected</h2>
//             <VscDebugDisconnect className='connectionicon' />
//           </div>
//         </div>
//       </div>

//       <div className='settings-content'>
//         <div className='leftbar-primary'>
//           <div className='primary-heading'>
//             <div className='back-logo'><RiArrowGoBackLine /></div>
//             <div className='logo-side'>Site Setting</div>
//           </div>

//           <ul className='setting-list'>
//             <li
//               className={selectedPrimarySetting === 'General' ? 'selected' : ''}
//               onClick={() => handlePrimaryClick('General')}
//             >
//               General
//             </li>
//             <li
//               className={selectedPrimarySetting === 'Comm Links' ? 'selected' : ''}
//               onClick={() => handlePrimaryClick('Comm Links')}
//             >
//               Comm Links
//             </li>
//             <li
//               className={selectedPrimarySetting === 'Offline Maps' ? 'selected' : ''}
//               onClick={() => handlePrimaryClick('Offline Maps')}
//             >
//               Offline Maps
//             </li>
//             <li
//               className={selectedPrimarySetting === 'MAVLink' ? 'selected' : ''}
//               onClick={() => handlePrimaryClick('MAVLink')}
//             >
//               MAVLink
//             </li>
//             <li
//               className={selectedPrimarySetting === 'Console' ? 'selected' : ''}
//               onClick={() => handlePrimaryClick('Console')}
//             >
//               Console
//             </li>
//           </ul>
//         </div>

//         <div className='leftbar-secondary'>
//           <div className='secondary-heading'>{selectedPrimarySetting}:</div>
//           <div className='list'>{renderSecondaryList()}</div>
//         </div>

//         <div className='content-display'>
//           {renderContent()}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Settings;

import React, { useState } from 'react';
import './Setting.css';
import { BsGridFill } from "react-icons/bs";
import { VscDebugDisconnect } from "react-icons/vsc";
import { RiArrowGoBackLine } from "react-icons/ri";
import FlyView from './FlyView';
import PlanView from './PlanView';
import Units from './Units';
import Miscellaneous from './Miscellaneous';
import TeleLog from './TeleLog';
import Autocon from './Autocon';
import RtkGps from './RtkGps';
import AdsbServer from './AdsbServer';
import MenuPopup from '../components/MenuPopup';

function Settings() {
  const [selectedPrimarySetting, setSelectedPrimarySetting] = useState(null);
  const [selectedSecondarySetting, setSelectedSecondarySetting] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [commLinks, setCommLinks] = useState([]);

  const handlePrimaryClick = (setting) => {
    setSelectedPrimarySetting(setting);
    setSelectedSecondarySetting(null);
  };

  const handleSecondaryClick = (setting) => {
    if (setting === 'Add+') {
      setIsPopupOpen(true);
    }
    setSelectedSecondarySetting(setting);
  };

  const handleSaveCommLink = (link) => {
    setCommLinks([...commLinks, link]);
    setIsPopupOpen(false);
  };

  const handleEditCommLink = (index, updatedLink) => {
    const updatedLinks = [...commLinks];
    updatedLinks[index] = updatedLink;
    setCommLinks(updatedLinks);
  };

  const handleDeleteCommLink = (index) => {
    const updatedLinks = [...commLinks];
    updatedLinks.splice(index, 1);
    setCommLinks(updatedLinks);
  };

  const handleConnectCommLink = (index) => {
    const updatedLinks = [...commLinks];
    updatedLinks[index].connected = true;
    setCommLinks(updatedLinks);
  };

  const handleDisconnectCommLink = (index) => {
    const updatedLinks = [...commLinks];
    updatedLinks[index].connected = false;
    setCommLinks(updatedLinks);
  };

  const renderSecondaryList = () => {
    const secondarySettings = {
      'General': ['Fly View', 'Plan View', 'Units', 'Miscellaneous', 'Telemetry Logs from Vehicle', 'AutoConnect to Device', 'RTK GPS', 'ADSB Server'],
      'Comm Links': ['Add+'],
      'Offline Maps': ['Import', 'Export', 'Options'],
      'MAVLink': ['Ground Station', 'Mavlink Link Status (Current Vehicle)', 'Saved Log Files'],
      'Console': ['Console Setting 1', 'Console Setting 2']
    };

    return (
      <ul>
        {secondarySettings[selectedPrimarySetting]?.map((setting) => (
          <li
            key={setting}
            className={selectedSecondarySetting === setting ? 'selected' : ''}
            onClick={() => handleSecondaryClick(setting)}
          >
            {setting}
          </li>
        ))}
      </ul>
    );
  };

  const renderContent = () => {
    const contentComponents = {
      'Fly View': <FlyView />,
      'Plan View': <PlanView />,
      'Units': <Units />,
      'Miscellaneous': <Miscellaneous />,
      'Telemetry Logs from Vehicle': <TeleLog />,
      'AutoConnect to Device': <Autocon />,
      'RTK GPS': <RtkGps />,
      'ADSB Server': <AdsbServer />,
      'Add+': (
        <div className='add-content-display'>
          {commLinks.map((link, index) => (
            <div key={index} className='comm-link-card'>
              <h2>{link.name}</h2>
              <p>Type: {link.type}</p>
              <p>Serial Port: {link.serialPort}</p>
              <p>Baud Rate: {link.baudRate}</p>
              <p>Parity: {link.parity}</p>
              <p>Data Bits: {link.dataBits}</p>
              <p>Stop Bits: {link.stopBits}</p>
              <div className='button-group'>
                <button onClick={() => handleEditCommLink(index, { ...link, name: 'Updated Name' })}>Edit</button>
                <button onClick={() => handleDeleteCommLink(index)}>Delete</button>
                <button onClick={() => handleConnectCommLink(index)} disabled={link.connected}>Connect</button>
                <button onClick={() => handleDisconnectCommLink(index)} disabled={!link.connected}>Disconnect</button>
              </div>
            </div>
          ))}
        </div>
      )
    };

    return contentComponents[selectedSecondarySetting] || <p>Select an option from the left to view details.</p>;
  };

  return (
    <>
      <div className='topbar'>
        <div className='topbarleft'>
          <div className='logo'>
            <img className="logoicon" src="src/assets/WhatsApp Image 2024-06-10 at 17.07.03_ee31fcfd.jpg" alt="" />
            <h2 className='logotext'>AquaAir<span>X</span></h2>
          </div>
          <div className='topicons'>
            <BsGridFill className='menuicon' />
          </div>
        </div>
        <div className='topbarright'>
          <div className='status'>
            <h2 className='connectionstatus'>Disconnected</h2>
            <VscDebugDisconnect className='connectionicon' />
          </div>
        </div>
      </div>

      <div className='settings-content'>
        <div className='leftbar-primary'>
          <div className='primary-heading'>
            <div className='back-logo'><RiArrowGoBackLine /></div>
            <div className='logo-side'>Site Setting</div>
          </div>

          <ul className='setting-list'>
            <li
              className={selectedPrimarySetting === 'General' ? 'selected' : ''}
              onClick={() => handlePrimaryClick('General')}
            >
              General
            </li>
            <li
              className={selectedPrimarySetting === 'Comm Links' ? 'selected' : ''}
              onClick={() => handlePrimaryClick('Comm Links')}
            >
              Comm Links
            </li>
            <li
              className={selectedPrimarySetting === 'Offline Maps' ? 'selected' : ''}
              onClick={() => handlePrimaryClick('Offline Maps')}
            >
              Offline Maps
            </li>
            <li
              className={selectedPrimarySetting === 'MAVLink' ? 'selected' : ''}
              onClick={() => handlePrimaryClick('MAVLink')}
            >
              MAVLink
            </li>
            <li
              className={selectedPrimarySetting === 'Console' ? 'selected' : ''}
              onClick={() => handlePrimaryClick('Console')}
            >
              Console
            </li>
          </ul>
        </div>

        <div className='leftbar-secondary'>
          <div className='secondary-heading'>{selectedPrimarySetting}</div>
          <div className='list'>{renderSecondaryList()}</div>
        </div>

        <div className='content-display'>
          {renderContent()}
        </div>
      </div>

      {isPopupOpen && (
        <MenuPopup 
          onSave={handleSaveCommLink}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}

export default Settings;