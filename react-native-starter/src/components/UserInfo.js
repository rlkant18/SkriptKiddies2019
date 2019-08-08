import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const { name , location, time } = this.props.info;
       
        return ( 
          <View>   
            
            <Text style={[styles.container, {fontWeight: '700'}]}> {name} </Text>
            <Text style={styles.container}> {location} </Text>
            <Text style={styles.container}> {time} </Text>
          </View>
         );
    }
}
 
export default UserInfo;

const styles = StyleSheet.create({
    container: {
    padding: 5
    },

    
})