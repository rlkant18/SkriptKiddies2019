import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from '../components';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() { 
       
        return ( 
          <View>   
            <TextInput style={styles.container} />
            <TextInput style={styles.container} />
          </View>
         );
    }
}
 
export default Login;

const styles = StyleSheet.create({
    container: {
    padding: 5
    },
})// // // // // // 