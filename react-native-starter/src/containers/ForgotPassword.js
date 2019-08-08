// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { TextInput } from '../components';

// class ForgotPassword extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { UserNameText: 'Cafe Rewards Card Number or Email' };
//         this.state = { UserPassword: 'Password' };
//     }

//     render() {

//         const {
//             navigate
//         }=this.props.navigation

//         return (
//           <View style={styles.container}>
//             <TextInput type="bordered" value={this.state.UserNameText} onChangeText={(text) => this.setState({UserNameText: text})} />
//             <Button
//               onPress={() => navigate('Home')}
//               style={styles.demoButton}
//               secondary
//               rounded
//               title="Reset Password"
//               caption="Reset Password"
//             />
//           </View>
//            );
//         }
//     }
// export default ForgotPassword;
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'

//     }
// })

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  Image,
  Modal,
} from 'react-native';

class ForgotPassword extends Component {
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

          <Button
            onPress={() => {
              alert(
                'Email Has Been Sent',
                'Follow the instructions in your email to reset your password',
                [
                  {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                  },
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
              );
              navigate('Login');
            }}
            style={styles.Button}
            secondary
            rounded
            color="white"
            title="Reset Password"
            caption="Checkout"
          />
          <Button
            onPress={() => navigate('Login')}
            style={styles.Button}
            secondary
            rounded
            color="white"
            title="Cancel "
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
export default ForgotPassword;
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
