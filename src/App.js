import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <Switch></Switch> */}
    </Router>
  );
}

export default App;
