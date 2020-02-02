import React, { useContext } from 'react';
import { HelpContext } from '../../contexts/help.context';

const Help = () => {
  const { show, helps, setShow }= useContext(HelpContext);
  if(!show) {
    return <div></div>
  }
  return (
    <div className="help vh-100 p-3">
      <div className="d-flex justify-content-between">
        <p><span className="fas fa-question-circle"/> <strong>Ledis-CLI Help</strong></p>
        <button 
          className="bg-transparent border-0 close-help-btn text-white"
          onClick={() => setShow(false)}
        >
          <span className="fas fa-times-circle"/>
        </button>
      </div>
      <p><strong>Supported commands:</strong></p>
      <div className="content">
        <ul className="pl-3">
          {
            helps.map(help => (
              <li className="mb-2 text">
                <strong>{help.name} </strong>
                <em>

                {
                  help.args.map(arg => 
                    arg.type === 'array' ? <span>[{arg.name} ]</span> : <span>{arg.name} </span>
                  )
                  }
                </em>
                <br/>
                -&nbsp;
                {
                  help.description
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Help;