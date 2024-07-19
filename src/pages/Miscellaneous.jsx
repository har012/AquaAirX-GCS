import React, { useState } from 'react';
import './Miscellaneous.css';
import { FiPlus, FiMinus } from "react-icons/fi";

function Miscellaneous() {
  const [uiScale, setUiScale] = useState(1);
  const [appPath, setAppPath] = useState('');

  const incrementScale = () => setUiScale(prev => prev + 1);
  const decrementScale = () => setUiScale(prev => (prev > 0 ? prev - 1 : 0));

  const handleBrowse = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const filePath = event.target.files[0].path;
    setAppPath(filePath);
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="xyz">
          <div>Language</div>
          <select name="recordfileformat" id='langdrpbox'>
            <option value="mp4">Meter</option>
            <option value="avi">Kilometer</option>
            <option value="mov">Mile</option>
          </select>
        </div>
        
        <div className="xyz">
          <div>Color Scheme</div>
          <select name="recordfileformat" id='colorschmdrpbox'>
            <option value="mp4">Meter</option>
            <option value="avi">Kilometer</option>
            <option value="mov">Mile</option>
          </select>
        </div>

        <div className="xyz">
          <div>Map Provider</div>
          <select name="recordfileformat" id='mapprovdrpbox'>
            <option value="mp4">Square Meter</option>
            <option value="avi">Acre</option>
            <option value="mov">Hectare</option>
          </select>
        </div>

        <div className="xyz">
          <div>Map Type</div>
          <select name="recordfileformat" id='maptypdrpbox'>
            <option value="mp4">km/h</option>
            <option value="avi">mile/h</option>
            <option value="mov">m/s</option>
          </select>
        </div>

        <div className="xyz">
          <div>Stream GCS Position</div>
          <select name="recordfileformat" id='strmgcsposidrpbox'>
            <option value="mp4">Celsius</option>
            <option value="avi">Fahrenheit</option>
            <option value="mov">Kelvin</option>
          </select>
        </div>

        <div className="xyz">
          <div>UI Scaling</div>
          <div className='inpcont'>
            <div className="minus" onClick={decrementScale}><FiMinus className='minuslogo'/></div>
            <input className='uiscaleinp' type='text' value={uiScale} readOnly />
            <div className="plus" onClick={incrementScale}><FiPlus className='pluslogo'/></div>
          </div>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Mute all audio output</div>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Check for internet connection</div>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Clear all settings on next start</div>
        </div>

        <div className="xyz">
          <input className="checkbox" type="checkbox" />
          <div>Enable Remote ID</div>
        </div>

        <div className="pqr">
          <div className='xyz'>
            <div>Application Load/Save Path</div>
            <input className='appsavpath' type='text' value={appPath} readOnly />
          </div>
          <div className='browse-btn' onClick={handleBrowse}>Browse</div>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
        </div>
      </div>
    </div>
  )
}

export default Miscellaneous;