import React, { useState, useEffect } from 'react';
import './MenuPopup.css';

function MenuPopup({ onSave, onClose, initialData }) {
    // const [id, setId] = useState(null);
    const [name, setName] = useState(initialData ? initialData.name : '');
    const [autoConnect, setAutoConnect] = useState(initialData ? initialData.autoConnect : false);
    const [highLatency, setHighLatency] = useState(initialData ? initialData.highLatency : false);
    const [advancedSettings, setAdvancedSettings] = useState(false);
    const [flowControl, setFlowControl] = useState(false);
    const [type, setType] = useState(initialData ? initialData.type : 'Serial');
    const [serialPort, setSerialPort] = useState(initialData ? initialData.serialPort : 'COM3');
    const [baudRate, setBaudRate] = useState(initialData ? initialData.baudRate : '57600');
    const [parity, setParity] = useState(initialData ? initialData.parity : 'None');
    const [dataBits, setDataBits] = useState(initialData ? initialData.dataBits : '8');
    const [stopBits, setStopBits] = useState(initialData ? initialData.stopBits : '1');
    // const [showNotification, setShowNotification] = useState(false);
    // const [error, setError] = useState('');

  const handleSubmit = () => {
    if (name) {
      onSave({ name, autoConnect, highLatency, advancedSettings, flowControl, type, serialPort, baudRate, parity, dataBits, stopBits });
      onClose();
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <h2>Create New Link Configuration</h2>
        <div className='comm-name'>
          <div>Name:</div>
          <input className='commnameinp' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className='lmn'>
          <input className="checkbox" type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} />
          <div>Automatically Connect to Start</div>
        </div>

        <div className='lmn'>
          <input className="checkbox" type="checkbox" checked={highLatency} onChange={(e) => setHighLatency(e.target.checked)} />
          <div>High Latenct</div>
        </div>

        <div className='comm-type'>
          <div>Type:</div>
          <select name="commtypedrpdwn" id='commtypedrpdwn' value={type} onChange={(e) => setType(e.target.value)}>
            <option value="serial">Serial</option>
            <option value="udp">UDP</option>
            <option value="tcp">TCP</option>
            <option value="logreplay">Log Replay</option>
          </select>
        </div>

        <div className='comm-srlport'>
          <div>Serial Port:</div>
          <select name="commsrlportdrpdwn" id='commsrlportdrpdwn' value={serialPort} onChange={(e) => setSerialPort(e.target.value)}>
            <option value="com3">COM3</option>
            <option value="com5">COM4</option>
            <option value="com6">COM6</option>
            <option value="com7">COM7</option>
            <option value="com8">COM8</option>
            <option value="com9">COM9</option>
          </select>
        </div>

        <div className='comm-baudrate'>
          <div>Baud Rate:</div>
          <select name="commbaudraedrpdwn" id='commbaudraedrpdwn' value={baudRate} onChange={(e) => setBaudRate(e.target.value)}>
            <option value="serial">57600</option>
            <option value="com5">2400</option>
            <option value="com6">4800</option>
            <option value="com7">9600</option>
            <option value="com8">14400</option>
            <option value="com9">19200</option>
            <option value="com9">38400</option>
            <option value="com9">56000</option>
            <option value="com9">115200</option>
            <option value="com9">128000</option>
            <option value="com9">230400</option>
            <option value="com9">256000</option>
            <option value="com9">460800</option>
            <option value="com9">500000</option>
            <option value="com9">921600</option>
          </select>
        </div>

        <div className='lmn advsett'>
          <input className="checkbox" type="checkbox" checked={advancedSettings} onChange={(e) => setAdvancedSettings(e.target.checked)} />
          <div>Advance Setings</div>
        </div>

        {/* {advancedSettings && ( */}
          <div className={`advanced-options ${advancedSettings ? 'visible' : ''}`}>
            <div className='lmn'>
              <input className="checkbox" type="checkbox" checked={flowControl} onChange={(e) => setFlowControl(e.target.checked)} />
              <div>Enable Flow Control</div>
            </div>

            <div className='comm-parity'>
              <div>Parity:</div>
              <select name="commparitydrpdwn" id='commparitydrpdwn' value={parity} onChange={(e) => setParity(e.target.value)}>
                <option value="none">None</option>
                <option value="even">Even</option>
                <option value="odd">Odd</option>
              </select>
            </div>

            <div className='comm-databits'>
              <div>Data Bits:</div>
              <select name="commdatabitsdrpdwn" id='commdatabitsdrpdwn' value={dataBits} onChange={(e) => setDataBits(e.target.value)}>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>

            <div className='comm-stopbits'>
              <div>Stop Bits:</div>
              <select name="commstopbitsdrpdwn" id='commstopbitsdrpdwn' value={stopBits} onChange={(e) => setStopBits(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        {/* )} */}

        <button className='savebtn' onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default MenuPopup;