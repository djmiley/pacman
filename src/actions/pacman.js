import * as actions from '../constants/actions';

export function setPageNumber(pageNumber) {
    return {
        type: actions.SET_PAGE_NUMBER,
        pageNumber
    }
}