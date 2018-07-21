import './polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import AppHotable from './app.hot';

ReactDom.render(<AppHotable />, document.getElementById('root'));
