import React, { useState, useEffect } from 'react';
import HelpAPI from '../api/help.api';

export const HelpContext = React.createContext();

const HelpProvider = (props) => {
  const [ helps, setHelps ] = useState([]);
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    const getHelp = async () => {
      const helps = await HelpAPI();
      setHelps(helps);
    }

    getHelp();
  }, []);

  return (
    <HelpContext.Provider value={{helps, show, setShow}}>
      { props.children }
    </HelpContext.Provider>
  )
}

export default HelpProvider;