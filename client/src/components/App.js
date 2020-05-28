import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Landing from './Landing';
import Dashboard from './Dashboard';
import NewSurvey from './Surveys/NewSurvey';
import * as actions from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route exact path="/surveys/new" component={NewSurvey} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);