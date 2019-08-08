import React from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { colors, fonts } from '../../styles';
import FoodModal from '../components/FoodModal';
import { addItemsToState, addItemToCart } from '../../redux/FoodItemsDucks';
import { getItems } from '../selector';

import { RadioGroup, GridRow } from '../../components';

console.disableYellowBox = true;
class GridsScreen extends React.Component {
  listData = [
    {
      id: 1,
      brand: 'Citizen',
      title: 'Grilled Chicken Sandwich',
      subtitle: '200 Calories',
      price: '$4.85',
      priceInt: 4.85,
      badge: 'NEW',
      badgeColor: '#3cd39f',
      image:
        'https://www.sixsistersstuff.com/wp-content/uploads/2013/09/Chicken-Sandwich-main-shot-1-of-1-683x1024.jpg',
    },
    {
      id: 2,
      brand: 'Citizen',
      title: 'Grilled Salmon',
      subtitle: '260 Calories',
      price: '$5.99',
      priceInt: 4.85,
      badge: 'NEW',
      badgeColor: '#3cd39f',
      image:
        'https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Salmon-foodiecrush.com-023.jpg',
    },
    {
      id: 3,
      brand: 'Citizen',
      title: 'Grilled Salmon Meal',
      subtitle: '415 Calories',
      price: '$7.99',
      priceInt: 4.85,
      badge: 'NEW',
      badgeColor: '#3cd39f',
      image:
        'https://www.cookingclassy.com/wp-content/uploads/2016/09/grilled_salmon_avocado_greek_salsa4crop..jpg',
    },
  ];

  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false
    }

    this.item = {}
  }

  _getRenderItemFunction = () =>
    [this.renderRowOne,this.renderRowTwo,this.renderRowThree][
      this.props.tabIndex
    ];

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _openArticle = item => {
    // console.error(item, 'hello')
    this.item = item
    this.setModalVisible(true)
  };

  componentDidMount() {
    this.props.addItemsToState(this.listData)

  }

  renderRowOne = rowData => {
    // console.error(JSON.stringify(rowData))
    const cellViews = rowData.item.map(item => (
      <TouchableOpacity key={item.id} onPress={() => this._openArticle(item)}>
        <View style={styles.itemOneContainer}>
          <View style={styles.itemOneImageContainer}>
            <Image style={styles.itemOneImage} source={{ uri: item.image }} />
          </View>
          <View style={styles.itemOneContent}>
            <Text style={styles.itemOneTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={styles.itemOneSubTitle}
              styleName="collapsible"
              numberOfLines={3}
            >
              {item.subtitle}
            </Text>
            <Text style={styles.itemOnePrice} numberOfLines={1}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    ));
    return (
      <View key={rowData.item[0].id} style={styles.itemOneRow}>
        {cellViews}
      </View>
    );
  };
  
  render() {
    const {
      items
    } = this.props
    const groupedData =
      this.props.tabIndex === 0
        ? GridRow.groupByRows(items, 2)
        : items;
    if (this.state.modalVisible) return (
      <FoodModal 
        item={this.item}
        onCancel={(visible) => this.setModalVisible(visible)}
        onSubmit={() => {
        this.setModalVisible(false)
        this.props.addItemToCart(this.item)
      }
      }
      />
    )
    // console.error(items)
    return (
      <View style={styles.container}>
        <View style={{ height: 50, flex: .2 }}>
          <RadioGroup
            selectedIndex={this.props.tabIndex}
            items={this.props.tabs}
            onChange={this.props.setTabIndex}
            underline
          />
        </View>
        <FlatList
          keyExtractor={item =>
            item.id
              ? `${this.props.tabIndex}-${item.id}`
              : `${item[0] && item[0].id}`
          }
          style={{ backgroundColor: colors.white, paddingHorizontal: 15, flex: 1 }}
          data={groupedData}
          renderItem={this._getRenderItemFunction()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

const mapStateToProps = (state) => ({
  // selectors
  items: getItems(state),
});

const mapDispatchToProps = {
  addItemsToState,
  addItemToCart,
  // actions
};


export default connect(mapStateToProps, mapDispatchToProps)(GridsScreen);