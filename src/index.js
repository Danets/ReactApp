import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import initApp from './components/reducers'

let store = createStore(initApp)

   
  class NotFound extends React.Component{
      render(){
          return <h2>Ресурс не найден</h2>;
      }
  }


ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={Menu} />
            <Route component={NotFound} />
        </Switch>
    </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
