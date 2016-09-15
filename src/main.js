import riot from 'riot';
import {compose, createStore} from 'redux';

import * as actions from './constants/actions';

import './tags/app-container.tag';

import reducer from './reducers/pacman';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
    type: actions.SET_STATE,
    state: {}
});

document.addEventListener('DOMContentLoaded', () => {
    riot.mount('app-container', {store})
});
