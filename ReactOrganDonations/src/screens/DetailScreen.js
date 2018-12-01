import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>"DETAIL SCREEN"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const mapStateToProps = (state) => ({
  //location: state.exploreReducer.location,
});

const mapDispatchToProps = (dispatch) => ({
  //setRangeOption: (optionID) => dispatch(setRangeOption(optionID)),
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailScreen)
);