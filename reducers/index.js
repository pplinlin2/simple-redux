import { combineReducers } from "redux"

const counterReducer = (state = 0, action) => {
    // console.log('current state is ', state, 'and action is ', action);
    switch (action.type) {
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        default:
            return state;
    }
}

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_PENDING": {
            return {...state, fetching: true}
        } case "FETCH_USERS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        } case "FETCH_USERS_FULFILLED": {
            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                users: action.payload.data, 
            }
        }
    }
    return state
}

const reducer = combineReducers({
    counter: counterReducer, 
    users: usersReducer, 
})

export default reducer