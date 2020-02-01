import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid className="header shadown-sm">
      <div>
        <Image width={24} height={24} src="./redis-logo.png"/> <strong>Ledis CLI</strong>
      </div>
    </Container>
  )
};

export default Header;