import React, { Component} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { getCart, getTotal } from '../selector';
import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';
import PaymentModal from './PaymentModal'
import UserInfo from '../../components/UserInfo';
import List from "../checkout/List";

const uInfo = {
  name: "John Doe",
  location: "Amex-Sunrise",
  time: "12:15 PM"
}



class ComponentsScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentWillMount(){
    console.log(this.props)
  }

  render() {
    const { cart, total } = this.props;
    if(this.state.modalVisible) return <PaymentModal 
      onCancel={(visible) => this.setModalVisible(visible)}
      onSubmit={(form) => {
        if(form.values.type !== 'american-express'){
          console.error('Sorry we do not accept inferior cards')
        }
        else{
          this.setModalVisible(false)
          setTimeout(() => {
            alert('Purchase has been placed')
          }, 500)
        }
      }}
    />
    return (
      <View
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.componentsSection}>
         
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.componentSectionHeader}>Order Info</Text>
            <Button
              style={styles.demoButton}
              action
              caption="Edit"
              bgColor="transparent"
              color="#2E77BB"
              onPress={() => {}}
            />
          </View>
          <View>
            <UserInfo info={uInfo} /> 
          </View>
        </View>

        <View style={styles.cartSection}>
          <Text style={styles.componentSectionHeader}>Cart</Text>
          <ScrollView>
            <List cart={cart} />
          </ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.componentSectionHeader,{paddingTop: 15, marginBottom: -5}]}>Total</Text>
            <Text style={[styles.componentSectionHeader,{paddingTop: 15, marginBottom: -5}]}>${total}</Text>
          </View>
        </View>
        <Button 
          caption='Purchase'
          onPress={() => this.setModalVisible(true)}
          bgColor="#2E77BB"
        />
        {/* <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Action Buttons</Text>

        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            action
            bgColor="#958FDA"
            onPress={() => {}}
          >
            <Text>
              <Icon name="chevron-thin-right" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#4F44C1"
            onPress={() => {}}
          >
            <Text>
              <Icon name="controller-paus" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#3CD4A0"
            onPress={() => {}}
          >
            <Text>
              <Icon name="magnifying-glass" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#EF1F78"
            onPress={() => {}}
          >
            <Text>
              <Icon name="paper-plane" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#52B1F4"
            onPress={() => {}}
          >
            <Text>
              <Icon name="flash" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#19D4E6"
            onPress={() => {}}
          >
            <Text>
              <Icon name="reply-all" size={20} color="white" />
            </Text>
          </Button>
        </View>
      </View> */}

        {/* <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Icons</Text>

        <View style={styles.demoIconsContainer}>
          <Icon
            style={styles.demoIcon}
            name="basecamp"
            size={25}
            color="#5759CB"
          />
          <Icon style={styles.demoIcon} name="note" size={25} color="#5759CB" />
          <Icon
            style={styles.demoIcon}
            name="flashlight"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={styles.demoIcon}
            name="app-store"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={styles.demoIcon}
            name="baidu"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={styles.demoIcon}
            name="facebook"
            size={25}
            color="#5759CB"
          />
        </View>
        <View style={styles.demoIconsContainer}>
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="bookmark"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="chat"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="behance"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="calendar"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="camera"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="flattr"
            size={25}
            color="#5759CB"
          />
        </View>
        <View style={styles.demoIconsContainer}>
          <Icon
            style={styles.demoIcon}
            name="colours"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="compass"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="credit"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="cycle"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="database"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="flickr"
            size={25}
            color="#EF1F78"
          />
        </View>
        <View style={styles.demoIconsContainer}>
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="documents"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="download"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="dribbble"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="drop"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="erase"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="foursquare"
            size={25}
            color="#EF1F78"
          />
        </View>

        <Button
          style={[styles.demoButton, { width: 200, alignSelf: 'center' }]}
          primary
          bordered
          caption="More Icons"
        />
      </View> */}

        {/* <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Dropdown</Text>

        <Dropdown
          style={{ width: 200, alignSelf: 'center' }}
          onSelect={() => {}}
          items={['option 1', 'option 2']}
        />
      </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
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
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  demoButton: {
    fontSize:5
  },
  demoItem: {
    marginVertical: 15,
  },
});

const mapStateToProps = (state) => ({
  // selectors
  cart: getCart(state),
  total: getTotal(state)
});

const mapDispatchToProps = {
  // actions
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsScreen);