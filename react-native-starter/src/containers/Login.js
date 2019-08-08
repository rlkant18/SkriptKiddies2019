import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from '../components';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { UserNameText: 'Cafe Rewards Card Number or Email' };
        this.state = { UserPassword: 'Password' };
    }

    render() { 
        const {
            navigate
        }=this.props.navigation
        
        return ( 
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 150, height: 150, backgroundColor: 'blue'}}>   
            <TextInput type="bordered" value={this.state.UserNameText} onChangeText={(text) => this.setState({UserNameText: text})} />
            <TextInput type="bordered" value={this.state.UserPassword} onChangeText={(text) => this.setState({UserPassword: text})} />
            <Button
              onPress={() => navigate('Home')}
              style={styles.demoButton}
              secondary
              rounded
              title="Log In"
              caption="Checkout" 
            />
            <Button
              onPress={() => navigate('ForgotPassword')}
              style={styles.demoButton}
              secondary
              rounded
              title="Forgotten Password"
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