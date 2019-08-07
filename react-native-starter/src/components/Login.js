import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
       
        return ( 
          <View>   
            <Text style={styles.container}> Username </Text>
            <Text style={styles.container}> Password </Text>
          </View>
         );
    }
}
 
export default Login;

const styles = StyleSheet.create({
    container: {
    padding: 5
    },
})