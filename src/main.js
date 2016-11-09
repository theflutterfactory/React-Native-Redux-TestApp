import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import {
  Header
} from './components/common/Header';

export default class Main extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Tech Stack" />
        </View>
      </Provider>
        );
  }
}
