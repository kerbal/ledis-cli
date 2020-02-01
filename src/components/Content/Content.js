import React, { useState, useEffect } from 'react';
import Line from './Line';
import CommandAPI from '../../api/command.api';
import CommandInput from './CommandInput';

const Content = () => {
  const [data, setData] = useState([]);
  const sendCommand = async (command) => {
    if(command === 'clear') {
      setData([]);
      return; 
    }
    const response = await CommandAPI(command);
    setData([...data, {
      request: command,
      response
    }]);
  }

  return (
    <div className="container-fluid flex-grow-1 overflow-auto my-3 text-white content">
      {
        data.map(d => (
          <Line line={d}/>
        ))
      }
      <CommandInput sendCommand={sendCommand}/>
    </div>
  )
}

export default Content;