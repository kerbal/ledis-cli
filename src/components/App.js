import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Help from './Help/Help';
import HelpProvider from '../contexts/help.context';

function App() {
  return (
    <HelpProvider>
      <div className="d-flex">
        <div className="d-flex flex-column vh-100 flex-grow-1">
          <Header/>
          <Content/>
          <div className="text-white text-center">
            Copyright &copy; {new Date().getFullYear()} Khanh
          </div>
        </div>
        <Help/>
      </div>
    </HelpProvider>
  );
}

export default App;
