import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button} from '../../components';

const List = (props) => (
//   <React.Fragment>
//     <View style={{height: '50%', width: '100%', flex: 0, justifyContent: 'center', alignItems: 'center'}}>
//       <ScrollView style={styles.containerView}>
//         {props.cart.map(() => (<View style={styles.Item} />))}
//       </ScrollView>
//     </View>
//   </React.Fragment>
  <ScrollView contentContainerStyle={styles.item}>
    {props.cart.map((item) => (
      <React.Fragment>
        <View>
          <Text
            style={{
              color: '#48506B',
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ color: '#9B9B9B' }}>
            {item.time}
          </Text>
        </View>

        <View styleName="horizontal h-start"><Text>${`${item.price}`}</Text></View>
        <Button
          style={{fontSize: 10}}
          action
          caption="X"
          bgColor="#FFFFFF"
          color="red"
          onPress={() => {}}
        />
      </React.Fragment>
          ))}
  </ScrollView>
)


export default List;

// const styles = StyleSheet.create({
//     containerView: {
//         width: '100%',
//         backgroundColor: 'red',
//     },
//     Item: {
//         width: '100%',
//         height: 50,
//         backgroundColor: '#EFEFEF',
//         borderBottomWidth: 1,
//         borderBottomColor: 'black'
//     }
// })
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 10,
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30,
    },
  });