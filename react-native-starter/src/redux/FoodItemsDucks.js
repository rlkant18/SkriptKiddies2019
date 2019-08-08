import { fromJS } from 'immutable';
// import { createActionTypes } from '../utils/actions.js';

const ACTIONS = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    ADD_ITEM_TO_STATE: 'ADD_ITEM_TO_STATE',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',

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
        case ACTIONS.REMOVE_ITEM_FROM_CART:
            // console.error('Worked2')
            const arr = []
            let i = 0;
            while (i < state.cart.length) {
                arr.push(state.cart[i++]);
              }
            arr.splice(action.index, 1)
            // console.error(arr)
            return {...state,
                cart: arr,
                total: state.total - action.cost
            }
        case ACTIONS.ADD_ITEM_TO_CART:
            console.log(state.total);
            console.log(action.item.priceInt);
            return {...state,
                cart: [...state.cart, action.item],
                total: state.total + (action.item.quantity * action.item.priceInt)
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

export function removeItemFromCart(index, cost) {
    // console.error('Worked')
    return {
        type: ACTIONS.REMOVE_ITEM_FROM_CART,
        index,
        cost,
    }
}