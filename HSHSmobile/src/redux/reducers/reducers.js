import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
const rootReducer = combineReducers({
  firebase
});

export function reducer(state, action) {
    switch (action.type) {

        case 'GET_GUESTS_START':
            return Object.assign({}, state, {
                loading: true
            });

        case 'GET_GUESTS_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                guests: action.payload
            });
            
        case 'GET_INTERACTIONS_START':
            return Object.assign({}, state, {
                loading: true
            });

        case 'GET_INTERACTIONS_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                interactions: action.payload
            });
        case 'ADD_GUEST_START':
            return Object.assign({}, state, {
                adding: true
            });
        case 'ADD_NEW_GUEST_SUCCESS':
            return Object.assign({}, state, {
                adding: false
            });
        case 'ADD_NEW_ACTION_ITEM_START':
            return Object.assign({}, state, {
                addingAction: true
            });
        case 'ADD_NEW_ACTION_ITEM_SUCCESS':
            return Object.assign({}, state, {
                addingAction: false
            });
        case 'GET_ACTION_ITEMS_START':
            return Object.assign({}, state, {
                loading: true
            });

        case 'GET_ACTION_ITEMS_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                actionItems: action.payload
            });
        
        default:
            return state;
    }
}