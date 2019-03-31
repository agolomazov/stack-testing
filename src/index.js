import 'react-app-polyfill/ie11';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from './components/App';
import { StackContainer } from './components/Stack';
import { StackForm } from './components/StackForm';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/stack" exact component={StackContainer} />
      <Route path="/stack-form" exact component={StackForm} />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);