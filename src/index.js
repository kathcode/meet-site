import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import './index.css';

import Header from './shared/components/Header';
import ContainerList from './containers/List';
import Detail from './views/Detail';

const detailMockData = {
  imageUrl: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/4/23/w1200X800/animal-cat-face-close-up-feline-416160.jpg',
  altImgAttribute: 'cats',
  hostName: 'Kath',
  hostTitle: 'Software developer',
  phoneNumber: '12345',
  email: 'some@some.com',
  address: 'calle'
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ContainerList />
        </Route>
        <Router exact path="/detail/:id">
          <Detail siteData={detailMockData} />
        </Router>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
