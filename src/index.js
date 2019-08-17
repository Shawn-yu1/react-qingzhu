import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import './static/bootstrap/css/bootstrap.css'
import Good from './components/goodlist/Good';
import {Provider} from 'react-redux';
import store from './store/store';
ReactDOM.render(
<Provider store={store}>
    <App />
    <Good></Good>
</Provider>,   
document.getElementById('root'));
