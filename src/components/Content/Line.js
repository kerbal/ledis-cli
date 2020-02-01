import React from 'react';
import cx from 'classnames';
import _ from 'lodash';

const Line = (props) => {
  const { request, response } = props.line;
  const { message, value, success } = response;

  const classname = cx({
    'error': success === false,
    'null': value === null,
    'success': success === true
  });

  return (
    <div className="mb-2">
      <div>
        ledis &gt; {request}
      </div>
      <div className={classname}>
        {
          message ? success === false? `(error) ${message}` : message : ''
        }
        {
          value !== undefined ? 
          value === null ? `(nil)` :
          typeof value === 'number' ? `(interger) ${value}` :
          typeof value === 'string' ? `"${value}"`:
          _.isArray(value) ? (value.map((v, index) => <div key={index}>{index + 1}) {`"${v}"`}</div>)): '' : ''
        }
      </div>
    </div>
  )
}

export default Line;