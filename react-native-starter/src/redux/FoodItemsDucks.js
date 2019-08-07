import { fromJS } from 'immutable';
// import { createActionTypes } from '../utils/actions.js';

const ACTIONS = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    ADD_ITEM_TO_STATE: 'ADD_ITEM_TO_STATE'
}
// export const ACTIONS = createActionTypes([
//     'ADD_ITEM_TO_CART'
// ])

const intialState = {
    items: [],
    cart: [],
}

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM_TO_CART:
            return {...state,
                cart: [...state.cart, action.item]
            }
        case ACTIONS.ADD_ITEM_TO_STATE:
            return {...state,
                items: action.items
            }
        default:
            return intialState;
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