import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Students from '../containers/Student';
import store from '../store';
import '../styles/App.css';

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Students />
      </Router>
    </Provider>
  )
};

export default Routes;