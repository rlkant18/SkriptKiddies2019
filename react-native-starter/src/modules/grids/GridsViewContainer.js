import { compose, withState } from 'recompose';

import GridView from './GridsView';

export const listData = [
  {
    id: 1,
    brand: 'Citizen',
    title: 'Grilled Chicken Sandwich',
    subtitle: '200 Calories',
    price: '$4.85',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://images-gmi-pmc.edge-generalmills.com/6f2bed86-48ec-411b-ad9f-6d77fa8086e6.jpg',
  },
  {
    id: 2,
    brand: 'Citizen',
    title: 'Grilled Salmon',
    subtitle: '260 Calories',
    price: '$5.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  },
  {
    id: 3,
    brand: 'Citizen',
    title: 'Grilled Salmon Meal',
    subtitle: '415 Calories',
    price: '$7.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  },
];

export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['Available Items']),
  withState('data', 'setData', listData),
)(GridView);
