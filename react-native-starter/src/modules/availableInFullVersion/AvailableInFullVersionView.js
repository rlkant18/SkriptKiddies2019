import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Button } from '../../components';

export default function AvailableInFullVersionScreen(props) {
  const rnsUrl = 'https://reactnativestarter.com';
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then(supported => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log(`Don't know how to open URI: ${rnsUrl}`);
      }
    });
  };

  return (
    // <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: "#2E77BB"}}>
    //   <Image
    //     source={require('../../../assets/images/RNS_nerd.png')}
    //     style={styles.nerdImage}
    //   />

    //   <View style={styles.textContainer} />

    //   <View style={styles.buttonsContainer}>

    //     <Button
    //       large
    //       style={styles.button}
    //       caption="Later"
    //       onPress={() => props.navigation.goBack()}
    //       bgColor='red'
    //     />
    //   </View>
    // </View>
    <React.Fragment>
      <View style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/images/RNS_nerd.png')}
            style={styles.nerdImage}
          />
        </View>
        <View style={styles.componentsSection}>
          <Text style={styles.componentSectionHeader}>Profile</Text>
          <Button
            style={styles.demoButton}
            action
            caption="Edit"
            bgColor="transparent"
            color="#2E77BB"
            onPress={() => {}}
          />
          <View style={{justifyContent: 'flex-start'}}>
            <Text>Name: John Doe</Text>
            <Text>Email: John.Doe@aexp.com</Text>
            <Text>Preferred Time: 12:15 PM</Text>
          </View>
          <Button
            large
            style={styles.button}
            caption="Later"
            onPress={() => props.navigation.goBack()}
            bgColor='red'
          />
          <View />
        </View>
      </View>
    </React.Fragment>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
    backgroundColor: '#2E77BB'
  },
  containerThing: {
    flex: 1,
    backgroundColor: colors.bluish,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  nerdImage: {
    width: 80,
    height: 80,
  },
  availableText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 20,
    width: 300
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 200,
    borderRadius: 5,
    textAlign: 'center',
  },
  cartSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    height: '60%'
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 20,
  },
});
