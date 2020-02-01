import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
