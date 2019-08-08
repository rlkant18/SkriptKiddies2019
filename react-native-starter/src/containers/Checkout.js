import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../modules/checkout/List'
import { Button } from '../components';
import UserInfo from '../components/UserInfo';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
          <View>
            <UserInfo info={uInfo} />
            <List cart={cart} />
            <Button caption='Buy' />
          </View>
        );
    }
}
 
export default Checkout;

const cart = [
    {
        name: "Chicken Fingers"
    },
    {
        name: "Burger"
    },
    {
        name: "Chicken Fingers"
    },
]

