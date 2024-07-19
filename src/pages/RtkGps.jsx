import React, { useState } from 'react';
import './RtkGps.css';

function RtkGps() {
  const [selectedOption, setSelectedOption] = useState('set1');

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className={`set1 ${selectedOption === 'set1' ? 'active' : 'inactive'}`}>
          <div className='set1-main'>
            <input
              type="radio"
              checked={selectedOption === 'set1'}
              onChange={() => handleRadioChange('set1')}
            />
            <div>Perform Survey-In</div>
          </div>
          <div className='set1-sub'>
            <div>Survey in accuracy (U-blox only)</div>
            <input className='survinacc' type="text" disabled={selectedOption !== 'set1'} />
          </div>
          <div className='set1-sub'>
            <div>Minimum observation time</div>
            <input className='minobstime' type="text" disabled={selectedOption !== 'set1'} />
          </div>
        </div>

        <div className={`set2 ${selectedOption === 'set2' ? 'active' : 'inactive'}`}>
          <div className='set2-main'>
            <input
              type="radio"
              checked={selectedOption === 'set2'}
              onChange={() => handleRadioChange('set2')}
            />
            <div>Use Specified Base Position</div>
          </div>
          <div className='set2-sub'>
            <div>Base Position Latitude</div>
            <input className='bsposlat' type="text" disabled={selectedOption !== 'set2'} />
          </div>
          <div className='set2-sub'>
            <div>Base Position Longitude</div>
            <input className='bsposlon' type="text" disabled={selectedOption !== 'set2'} />
          </div>
          <div className='set2-sub'>
            <div>Base Position Alt (WGS84)</div>
            <input className='bsposalt' type="text" disabled={selectedOption !== 'set2'} />
          </div>
          <div className='set2-sub'>
            <div>Base Position Accuracy</div>
            <input className='bsposacc' type="text" disabled={selectedOption !== 'set2'} />
          </div>
        </div>
        <div className='bspos-btn'>Save Current Base Position</div>
      </div>
    </div>
  );
}

export default RtkGps;