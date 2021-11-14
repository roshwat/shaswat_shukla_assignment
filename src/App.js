import './App.css';
import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from './AuthenticatedRoute';
import { createBrowserHistory } from "history";
import  ContactList  from './ContactList';
import { Login } from './Login';
import { AuthProvider } from './AuthContext';


const history = createBrowserHistory();
function App() {
  
  return (
      <div className="App">
        <header className="App-header">
          <Router history={history}>
            <AuthProvider>
              <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <AuthenticatedRoute exact path="/home">
                    <ContactList/>
                </AuthenticatedRoute>
              </Switch>
            </AuthProvider>
          </Router>
        </header>
      </div>
  );
}

export default App;
