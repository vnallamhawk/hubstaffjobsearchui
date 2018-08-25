import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import 'antd/es/input/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/cascader/style/index.css';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import reducers from './reducers'
import StartUp from './components/StartUp'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(thunk, promise())(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
        <App />
    </Provider>), document.getElementById('root'));
