import { fromJS } from 'immutable';
// import { createActionTypes } from '../utils/actions.js';


const ACTIONS = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART'
}
// export const ACTIONS = createActionTypes([
//     'ADD_ITEM_TO_CART'
// ])

const intialState = fromJS({
    items: [],
    cart: [],
})

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM_TO_CART:
            return state.setIn(['items'], action.item)
        default:
            return state;
    }
    
}

export function addItemToCart(item) {
    return {
        type: ACTIONS.ADD_ITEM_TO_CART,
        item
    }
}