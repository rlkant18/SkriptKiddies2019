import { fromJS } from 'immutable';
// import { createActionTypes } from '../utils/actions.js';

const ACTIONS = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    ADD_ITEM_TO_STATE: 'ADD_ITEM_TO_STATE'
}
// export const ACTIONS = createActionTypes([
//     'ADD_ITEM_TO_CART'
// ])

const initialState = {
    items: [],
    cart: [],
    total: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM_TO_CART:
            console.log(state.total);
            console.log(action.item.priceInt);
            return {...state,
                cart: [...state.cart, action.item],
                total: state.total + action.item.priceInt
            }
        case ACTIONS.ADD_ITEM_TO_STATE:
            return {...state,
                items: action.items
            }
        default:
            return state;
    }
}

export function addItemsToState(items) {
    return {
        type: ACTIONS.ADD_ITEM_TO_STATE,
        items
    }
}

export function addItemToCart(item) {
    return {
        type: ACTIONS.ADD_ITEM_TO_CART,
        item
    }
}