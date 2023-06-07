import React from 'react';
import './../../styles/tailwind.css'
import MButton from './mButton';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClockFour } from '@fortawesome/free-solid-svg-icons';

const MenuPanel = () => {
  // Your menu/configuration components go here

  return (
  <div class="py-5 px-3 w-1/5 bg-white overflow-y-auto shadow-lg border rounded-md">
    <div class="font-medium text-lg">
        Add a step
    </div>
    <div className="font-light">
    Add channels and functions to your workflow to send messages to your customers.
    </div>
    <div id="workflow" class="h-full my-3">
        <div>Functions</div>
    <MButton title={"Delay"} subtitle={"Pause for an interval, then send"} icon={<FontAwesomeIcon icon={faClockFour} />}/>
    <MButton title={"Batch"} subtitle={"Incoming Events, then send"} icon={<i className="fas fa-cog"></i>}/>
    <MButton title={"Fetch"} subtitle={"Fetch data via HTTP request to an API, then send"} icon={<i className="fas fa-network-wired"></i>}/>
    <MButton title={"Delay"} subtitle={"Pause for an interval, then send"} icon={<i className="fas fa-cock"></i>}/>
   
    <div>Channels</div>
    <MButton title={"SMS"} subtitle={"Pause for an interval, then send"} icon={<i className="fas fa-sms"></i>}/>
    <MButton title={"Push Notification"} subtitle={"Incoming Events, then send"} icon={<i className="fas fa-envelope"></i>}/>
    <MButton title={"Email"} subtitle={"Fetch data via HTTP request to an API, then send"} icon={<i className="fas fa-bell"></i>}/>
    </div>
  </div>
);
};

export default MenuPanel;
