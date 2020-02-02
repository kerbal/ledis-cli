import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { HelpContext } from '../../contexts/help.context';

const Header = () => {
  const { setShow, show } = useContext(HelpContext);

  return (
    <Container fluid className="header shadown-sm">
      <div className="d-flex justify-content-between">
        <div>
          <Image width={24} height={24} src="./redis-small.png"/> <strong>Ledis CLI</strong>
        </div>
        {
          !show &&
          <button 
            className="border-0 bg-white rounded" 
            style={{color: '#2c3e50'}}
            onClick={() => setShow(true)}
          >
            <span className="fas fa-question-circle"/> Help
          </button>
        }
      </div>
    </Container>
  )
};

export default Header;