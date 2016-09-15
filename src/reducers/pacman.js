import * as actions from '../constants/actions';

function setState(state, updatedState) {
    let newState = state;
    if (!updatedState) {
        return newState;
    }
    newState = updatedState;
    return newState;
}

export default function(state = {}, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        default:
            return state;
    }
    return state;
}