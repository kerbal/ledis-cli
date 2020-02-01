import React, { useEffect, useState } from 'react';

const CommandInput = (props) => {
  const inputRef = React.createRef();
  const [ isSending, setIsSeding ] = useState(false);

  const enter = async (event) => {
    if(event.keyCode === 13) {
      const value = event.target.value.trim();
      if(value) {
        setIsSeding(true);
        await props.sendCommand(event.target.value);
        setIsSeding(false);
      }
    }
  }

  const focus = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  useEffect(() => {
    focus();
  })

  return (
    <div>
      <div className="d-flex">
        <span>ledis &gt;&nbsp;</span>
        <input
          type="text"
          ref={inputRef}
          onKeyDown={enter}
          className="command-input flex-grow-1"
          onBlur={focus}
          readOnly={isSending}
        />
      </div>
      {
        isSending && 
        <div>...</div>
      }
    </div>
  )
}

export default CommandInput;