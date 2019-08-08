import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Table from 'react-native-simple-table';
import { Button} from '../../components';

format = (number) => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
const List = (props) => (
//   <React.Fragment>
//     <View style={{height: '50%', width: '100%', flex: 0, justifyContent: 'center', alignItems: 'center'}}>
//       <ScrollView style={styles.containerView}>
//         {props.cart.map(() => (<View style={styles.Item} />))}
//       </ScrollView>
//     </View>
//   </React.Fragment>
//   <ScrollView contentContainerStyle={[styles.item, {flexDirection:'column'}]}>
//     <table>
//       <tbody>
//         {props.cart.map((item) => (
//           <tr>
//             <td><Text>{item.title}</Text></td>
//             <td><Text>{item.priceInt}</Text></td>
//             <td>     <Button
//               style={{fontSize: 10}}
//               action
//               caption="X"
//               bgColor="transparent"
//               color="red"
//               onPress={() => {}}
//               small
//               cartScreen
//             />
//             </td>
//           </tr>
//              ))}
//       </tbody>
//     </table>
   
//   </ScrollView>
  <ScrollView contentContainerStyle={[styles.item, {flexDirection:'column'}]}>
    {props.cart.map((item) => (
      <React.Fragment>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text
            style={{
            color: '#48506B',
            marginBottom: 10,
            flex: .6
        }}
          >
            {item.title}
          </Text>

          <Text style={{flex:.15}} styleName="horizontal h-start">${`${format(item.priceInt)}`}</Text>
          <Button
            style={{fontSize: 10, flex: .01}}
            action
            caption="X"
            bgColor="transparent"
            color="red"
            onPress={() => {}}
            small
            cartScreen
          />
        </View>
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