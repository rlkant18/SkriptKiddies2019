import React, {Component} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableHighlight, View, Alert} from 'react-native';
import { Button, RadioGroup, Dropdown } from '../../components';

export default class FoodModal extends Component {
  // this.props.onCancel(false)
  constructor(props) {
    super(props)

    this.quantity = 1
    this.selectedIndex = 0;
  }

  onSelect = (index, value) => {
    this.forceUpdate()
    this.selectedIndex = index;
    this.quantity = value;
  }
  
  format = (number) => {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  render() {
   const {
      title,
      subtitle,
      price,
      priceInt,
      image,
    } = this.props.item

    const {
      container,
      containerOuter,
    } = styles

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={containerOuter}>
          <View style={container}>
            <View style = {{flex: .9, marginTop: 10}}>
              <Text style={{fontSize: 20, marginBottom: 20, textAlign: 'center'}}>{title}</Text>
              <Image style={{width: 100, height: 100, alignSelf: 'center', borderRadius: 10, marginBottom: 20}} source={{uri: image}}></Image>
              <Text style={{fontSize: 15, marginBottom: 20, textAlign: 'center'}}>Select your quantity:</Text>

              <Dropdown
                style={{ width: 200, alignSelf: 'center' }}
                onSelect={(index, value) => this.onSelect(index, value)}
                items={['1', '2', '3', '4', '5']}
                selectedIndex={this.selectedIndex}
                value={this.quantity}
              />
              <Text style={{fontSize: 15, marginTop: 60, textAlign: 'center'}}>${this.format(priceInt * this.quantity)}</Text>
            </View>

            <View style={{flexDirection:'row', flex: .1}}>
              <Button
                onPress={() => this.props.onCancel(false)}
                style={styles.demoButton}
                secondary
                rounded
                caption = "Cancel"/>

                <Button
                onPress={() => this.props.onSubmit(this.quantity)}
                style={styles.demoButton}
                secondary
                rounded
                caption = "Submit"/>
              </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 125,
    // marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6CC4EE',
    width: 275,
    height: 450,
    borderRadius: 10
  },
  containerOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#fff4',
    flex: 0
  },
  demoButton: {
    flex: 1,
    margin: 2,
  },
});