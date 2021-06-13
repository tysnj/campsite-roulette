import React, { useState } from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Footer } from './components';
import Home from './pages/Home/Home'
import Saved from './pages/Saved/Saved'
import Read from './pages/Read/Read'

const App = () => {
  const [savedStories, setSavedStories] = useState([])
  const [readStories, setReadStories] = useState([])
  const [openedStories, setOpenedStories] = useState([])

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/'
          render={() => (
            <Home
              saved={savedStories}
              setSavedStories={setSavedStories}
              read={readStories}
              setReadStories={setReadStories}
              opened={openedStories}
              setOpenedStories={setOpenedStories} 
            />
          )}
        />
        <Route path='/saved'
          render={() => (
            <Saved
              saved={savedStories}
              setSavedStories={setSavedStories}
              read={readStories}
              setReadStories={setReadStories}
              opened={openedStories}
              setOpenedStories={setOpenedStories} 
            />
          )}
        />
        <Route path='/read'
          render={() => (
            <Read
              saved={savedStories}
              setSavedStories={setSavedStories}
              read={readStories}
              setReadStories={setReadStories}
              opened={openedStories}
              setOpenedStories={setOpenedStories} 
            />
          )}
        />
        <Redirect to='/' />          
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
