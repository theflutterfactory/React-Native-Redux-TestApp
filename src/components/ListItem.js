import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import {
  CardSection
} from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.id === selectedLibraryId) {
      return (
        <Text>{this.props.library.description}</Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state) =>
({ selectedLibraryId: state.selectedLibraryId });

export default connect(mapStateToProps, actions)(ListItem);
