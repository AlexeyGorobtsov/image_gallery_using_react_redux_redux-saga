// import React from 'react';
// import {render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import todoApp from './redusers';
// import App from './components/App';
//
// const store = createStore(todoApp);
//
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDom from 'react-dom';


ReactDom.render(
    <h1>Hello React</h1>,
    document.getElementById('root'),
);