import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ListItem from './components/ListItem';

ReactDOM.render(<ListItem />, document.getElementById('root'));
registerServiceWorker();
