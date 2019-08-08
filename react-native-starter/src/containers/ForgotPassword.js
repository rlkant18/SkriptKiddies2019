import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from '../components';


class ForgotPassword extends Component {
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
          <View style={styles.container}>   
            <TextInput type="bordered" value={this.state.UserNameText} onChangeText={(text) => this.setState({UserNameText: text})} />
            <Button
              onPress={() => navigate('Home')}
              style={styles.demoButton}
              secondary
              rounded
              title="Reset Password"
              caption="Reset Password" 
            />
          </View>
           );
        }
    }
export default ForgotPassword;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
        
    }   
}) 