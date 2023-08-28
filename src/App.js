import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Footer } from './components';
import Home from './pages/Home/Home'
import Saved from './pages/Saved/Saved'
import Read from './pages/Read/Read'
import { init } from 'commandbar';

init('988748cc');

const App = () => {
  const [savedStories, setSavedStories] = useState([])
  const [readStories, setReadStories] = useState([])
  const [openedStories, setOpenedStories] = useState([])

  useEffect(() => {
    const loggedInUserId = '12345'; // example
    window.CommandBar.boot(loggedInUserId).then(() => {
    });

    return () => {
      window.CommandBar.shutdown();
    }
  }, []);

  const onCustomSearch = (query) => {
    let requestURL = 'https://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=story'
    return fetch(requestURL + query + attributes)
  }

  window.CommandBar.addArgumentChoices('customSearch', [],
  {
    searchableFields: onCustomSearch
  }
);


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
