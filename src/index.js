import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Gallery from './components/Gallery';
import { images } from './redusers/reduser';

const store = createStore(images);
ReactDom.render(
    <Provider store={store}>
        <Gallery />
    </Provider>,
    document.getElementById('root'),
);