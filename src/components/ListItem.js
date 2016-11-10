import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet
} from 'react-native';
import {
  CardSection
} from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle:  {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default connect(null, actions)(ListItem);
