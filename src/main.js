import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class Main extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View />
      </Provider>
        );
  }
}
