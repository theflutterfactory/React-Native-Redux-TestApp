import React, { Component } from 'react';
import {
  ListView,
  connect,
  View,
  StyleSheet
} from 'react-redux';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow() {

  }

  renderSeparator(sectionID, rowID) {
    return (
      <View style={styles.separator} key={sectionID + rowID} />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator} />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#90141414'
  }
});

export default connect(mapStateToProps)(LibraryList);
