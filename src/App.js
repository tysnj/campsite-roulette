import React, { useState } from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Footer } from './components';
import Home from './pages/Home/Home'
import Saved from './pages/Saved/Saved'

function App() {
  const [saved, setSaved] = useState([])

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route 
          path='/' 
          exact component={Home} 
          saved={saved}
          setSaved={setSaved}
        />
        <Route 
          path='/saved'  
          component={Saved} 
          saved={saved}
          setSaved={setSaved}
        />
        <Redirect to='/' />          
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
