import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class FoodModal extends Component {
  // this.props.onCancel(false)

  render() {
    const {
      container,
      containerOuter
    } = styles;
    return (
      <View style={containerOuter}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{flex: 0}}>
            <View style={container}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => this.props.onCancel(false)}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 300,
    height: 300,
    flex: 0
  },
  containerOuter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});