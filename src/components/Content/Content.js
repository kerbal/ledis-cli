import React, { useState, useContext } from 'react';
import Line from './Line';
import CommandInput from './CommandInput';
import { HelpContext } from '../../contexts/help.context';
import CommandService from '../../services/command.service';

const Content = () => {
  const [ data, setData ] = useState([]);
  const [ history, setHistory ] = useState([]);
  const { setShow } = useContext(HelpContext);

  const sendCommand = (command) => {
    if(command.toUpperCase() === 'CLEAR') {
      setData([]);
    }
    else if(command.toUpperCase() === 'HELP') {
      setData([...data, {request: command, response: {}}]);
      setShow(true);
    }
    else if(command) {
      const response = CommandService.execute(command);
      setData([...data, {
        request: command,
        response
      }]);
    }
    else {
      setData([...data, {request: command, response: {}}]);
    }
    if(command) {
      setHistory([command, ...history]);
    }
  }

  return (
    <div className="container-fluid flex-grow-1 overflow-auto my-3 text-white content" id="content">
      {
        data.map((d, index) => (
          <Line line={d} key={index}/>
        ))
      }
      <CommandInput sendCommand={sendCommand} history={history}/>
    </div>
  )
}

export default Content;