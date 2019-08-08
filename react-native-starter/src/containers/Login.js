import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserNameText: null,
      UserPassword: null,
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/images/amex.png')}
      >
        <Text style={styles.titleText}>Amex Café Ordering</Text>

        <View style={{}}>
          <TextInput
            type="bordered"
            style={styles.background}
            // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="  Café Rewards Card Number or Email"
            value={this.state.UserNameText}
            onChangeText={text => this.setState({ UserNameText: text })}
          />
          <TextInput
            type="bordered"
            style={styles.background}
            placeholder="  Password"
            value={this.state.UserPassword}
            onChangeText={text => this.setState({ UserPassword: text })}
          />
          <Button
            onPress={() => navigate('Home')}
            style={styles.Button}
            secondary
            rounded
            color="white"
            title="Log In"
            caption="Checkout"
          />
          <Button
            onPress={() => navigate('ForgotPassword')}
            style={styles.Button}
            secondary
            rounded
            color="white"
            title="Forgot Password"
            caption="Checkout"
          />
          
          <Image
            style={{
              width: '100%',
              height: '15%',
              alignContent: 'center',
              marginTop: 100,
              paddingTop: 20,
            }}
            source={require('../../assets/images/orderWhite.png')}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: '#fff',
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 70,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    margin: 50,
    height: '20%',
    width: '100%',
    marginTop: 120,
    // justifyContent: 'center',
    // alignItems: 'stretch',
    // flexDirection: 'row',
  },
});
