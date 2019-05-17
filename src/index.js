import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import config from './config';
import { CometChat } from '@cometchat-pro/chat';

CometChat.init(config.appID);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);