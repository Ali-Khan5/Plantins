import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routers from './Route';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

export default App;
