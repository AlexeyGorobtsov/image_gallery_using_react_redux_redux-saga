import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Gallery from './components/Gallery';
import { images } from './redusers/reduser';
import { watchForLoadImages } from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    images,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchForLoadImages);
ReactDom.render(
    <Provider store={store}>
        <Gallery />
    </Provider>,
    document.getElementById('root'),
);