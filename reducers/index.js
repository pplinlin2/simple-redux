import { combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
    console.log('current state is ', state, 'and action is ', action);

    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

const reducer = combineReducers({
    counter: counterReducer
})

export default reducer