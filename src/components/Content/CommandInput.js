import React, { useEffect, useState } from 'react';

const CommandInput = (props) => {
  const inputRef = React.createRef();
  const [ isSending, setIsSeding ] = useState(false);
  let historyIndex = -1;
  
  const onKeyDown = async (event) => {
    const keyCode = event.keyCode;
    const { value } = event.target;
    const { history } = props;
    if(keyCode === 13) {
      setIsSeding(true);
      await props.sendCommand(value);
      setIsSeding(false);
    }
    else if(keyCode === 38) {
      if(historyIndex + 1 < history.length) {
        historyIndex++;
        event.target.value = history[historyIndex];
      }
    }
    else if(keyCode === 40) {
      if(historyIndex - 1 >= 0) {
        historyIndex--;
        event.target.value = history[historyIndex];
      }
      else if(historyIndex - 1 === -1) {
        historyIndex--;
        event.target.value = '';
      }
    }
    else {
      historyIndex = -1;
    }
  }

  const focus = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.value = "";
    focus();
  });

  return (
    <div>
      <div className="d-flex">
        <span>ledis &gt;&nbsp;</span>
        <input
          type="text"
          ref={inputRef}
          onKeyDown={onKeyDown}
          className="command-input flex-grow-1"
          onBlur={focus}
          readOnly={isSending}
        />
      </div>
      {
        isSending && 
        <div>......</div>
      }
    </div>
  )
}

export default CommandInput;