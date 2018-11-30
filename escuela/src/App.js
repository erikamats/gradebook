import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './App.css';

import NavigationBar from './components/nav/NavigationBar';
import LandingPage from './components/Pages/landingPage/LandingPage';
import ErrorPage from './components/Pages/error/ErrorPage';
import Gradebook from './components/Pages/gradebook/Gradebook';
import SignupPage from './components/Pages/signup/SignupPage';
// import AddClassPage from './components/nav/nav_msg/AlertMessage';
import ClassList from './components/Pages/users/ClassList';
import MessagesList from './components/nav/nav_msg/MessagesList';

import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <NavigationBar />
            <MessagesList />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/gradebook" component={Gradebook} />
              <Route exact path="/users" component={ClassList} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/dashboard" component={SignupPage} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
