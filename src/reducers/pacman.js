import * as actions from '../constants/actions';

function setState(state, updatedState) {
    let newState = state;
    if (!updatedState) {
        return newState;
    }
    newState = updatedState;
    return newState;
}

function setPageNumber(state, pageNumber) {
    let newState = state;
    if (pageNumber !== parseInt(pageNumber, 10)) {
        return newState;
    }
    newState.pageNumber = pageNumber;
    return newState;
}

export default function(state = {}, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.SET_PAGE_NUMBER:
            return setPageNumber(state, action.pageNumber);
        default:
            return state;
    }
    return state;
}