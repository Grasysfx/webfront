

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./Pages/Main";
import LogIn from './Pages/LogIn';
import ImageLibrary from "./Pages/ImageLibrary";
import { LanguageProvider } from './locales/LanguageContext'; 

function App() {
  
  return (
    <LanguageProvider> 
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Main}/>
          <Route path='/LogIn' exact={true} component={LogIn}/>
          <Route path="/ImageLibrary" exact={true} component={ImageLibrary} />
        </Switch>
      </Router>
    </LanguageProvider>
  );
}

export default App;