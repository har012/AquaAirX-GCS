import React from 'react';
import './FlyView.css';

function FlyView() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='normal-setting'>
          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Use Pre-Flight checklist</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Enforce Pre-Flight checklist</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Keep Map Centered on vehicle</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Show Telemetry Log Replay Status Bar</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Virtual Joystick</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Use Vertical Instrument Panel</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Show Additional heading indicators on compass</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Lock Compass Nose-Up</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Show Simple Camera controls(DIGICAM_CONTROL)</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Update home position based on device location.This will affect return to home</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Enable Custom Actions</div>
          </div>
        </div>

        <div className='guided-setting'>
          <b className="setting-type">Guided Command Setting</b>

          <div className="xyz">
            <div>Minimum Altitude</div>
            <input className="minaltinp" type='text'/>
          </div>
          
          <div className="xyz">
            <div>Maximum Altitude</div>
            <input className="maxaltinp" type='text'/>
          </div>
          
          <div className="xyz">
            <div>Go To Location Max Distance</div>
            <input className="gotomaxdist" type='text'/>
          </div>
        </div>
        

        <div className='video-setting'>
          <b className="setting-type">Video Settings</b>

          <div className="xyz">
            <div>Source</div>
            <select name="sourcesettings" id='srcdrpbox'>
              <option value="Video Stream Disabled">Video Stream Disabled</option>
              <option value="RTSP Video Stream">RTSP Video Stream</option>
              <option value="UDP h.264">UDP h.264 Video Stream</option>
              <option value="UDP h.265">UDP h.265 Video Stream</option>
              <option value="IntegratedCamera">IntegratedCamera</option>
              <option value="3DR Solo"> 3DR Solo(requires restart)</option>
              <option value="Parrot Discovery">Parrot Discovery</option>
              <option value="Herelink">Herelink Hotspot</option>
              <option value="Yuneec Mantis G">Yuneec Mantis G</option>
              <option value="MPEG-TS">MPEG-TS(h.264) Video Stream</option>
            </select>
          </div>

          <div className="xyz">
            <div>UDP Port</div>
            <input className='udpportinp' type='text'/>
          </div>
          
          <div className="xyz">
            <div>Aspect Ratio</div>
            <input className="aspratinp" type='text'/>
          </div>

          <div className="xyz">
            <div>Record File Format</div>
            <select name="recordfileformat" id='recfiledrpbox'>
              <option value="mp4">MP4</option>
              <option value="avi">AVI</option>
              <option value="mov">MOV</option>
            </select>
          </div>
          
          <div className="xyz">
            <div>Video Decode Priority</div>
            <select name="videodecodepriority" id='viddecopridrpbox'>
              <option value="default">Default</option>
              <option value="forcesoftware">Force Software Decoder</option>
              <option value="forcenvidia">Force NVIDIA Decoder</option>
              <option value="forcedirectx3d">Force DirectX3D 11 Decoder</option>
            </select>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Disable When Disarmed</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Low Latency Mode</div>
          </div>

          <div className="xyz">
            <input className="checkbox" type="checkbox" />
            <div>Auto-Delete Saved Recordings</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlyView;