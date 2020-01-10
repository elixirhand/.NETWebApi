import React from 'react';
import { Home } from './components/Home';
import { Department } from './components/Department';
import { Employee } from './components/Employee';
import { Navigation } from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          React JS With WebApi </h3>

        <h5 className="m-3 d-flex justify-content-center">
          Employee Management Portal </h5>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Department' component={Department} />
          <Route path='/Employee' component={Employee} />
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
