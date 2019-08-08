import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from '../components';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() { 
        
        const {
            navigate
        }=this.props.navigation
        
        return ( 
          <View style={styles.container}>   
            <TextInput type="bordered" UserName />
            <TextInput type="bordered" Password />
            <Button
              onPress={() => navigate('Home')}
              style={styles.demoButton}
              secondary
              rounded
              title="Log In"
              caption="Checkout" 
            />
          </View>
           );
        }
    }
export default Login;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'

    }   
}) 