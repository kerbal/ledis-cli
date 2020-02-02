import React, { useEffect } from 'react';

const Loading = () => {
  const symbols = ['|', '/', '-', '\\'];
  let index = 0;
  const ref = React.createRef();
  const trigger = setInterval(() => {
    index = (index + 1) % symbols.length;
    try {
      ref.current.innerText = symbols[index];
    }
    catch (error) {
      clearInterval(trigger);
    }
  }, 125);

  return (
    <div ref={ref}>
      |
    </div>
  );
}

export default Loading;