import React, { useState } from 'react';

export const HelpContext = React.createContext();

const HelpProvider = (props) => {
  const [ show, setShow ] = useState(false);

  return (
    <HelpContext.Provider value={{ show, setShow }}>
      { props.children }
    </HelpContext.Provider>
  )
}

export default HelpProvider;