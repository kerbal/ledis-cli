import React, { useState, useEffect } from 'react';
import Line from './Line';
import CommandAPI from '../../api/command.api';
import CommandInput from './CommandInput';
import { animateScroll } from 'react-scroll';

const Content = () => {
  const [ data, setData ] = useState([]);
  const [ history, setHistory ] = useState([]);

  const sendCommand = async (command) => {
    if(command.toUpperCase() === 'CLEAR') {
      setData([]);
      return; 
    }
    if(command) {
      const response = await CommandAPI(command);
      setData([...data, {
        request: command,
        response
      }]);
    }
    else {
      setData([...data, {command, response: {}}]);
    }
    setHistory([command, ...history]);
    animateScroll.scrollToBottom({containerId: 'content', smooth: false, duration: 0});
  }

  return (
    <div className="container-fluid flex-grow-1 overflow-auto my-3 text-white content" id="content">
      {
        data.map(d => (
          <Line line={d}/>
        ))
      }
      <CommandInput sendCommand={sendCommand} history={history}/>
    </div>
  )
}

export default Content;