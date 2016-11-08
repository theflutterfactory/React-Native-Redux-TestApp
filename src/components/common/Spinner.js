import React from 'react';
import {
  View,
  ActivityIndicator,
  StylesSheet
} from 'react-native';

const Spinner = ({ size }) => (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );

  const styles = StylesSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Spinner;
