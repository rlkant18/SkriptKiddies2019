import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const { UserName , UserPassword } = this.props.info;
       
        return ( 
          <View>   
            <Text style={styles.container}> {UserName} </Text>
            <Text style={styles.container}> {UserPassword} </Text>
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