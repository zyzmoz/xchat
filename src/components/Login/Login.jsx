import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { CometChat } from '@cometchat-pro/chat';
import config from '../../config';

const Login = (props) => {
  const [uidValue, setUidValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    CometChat.login(uidValue, config.apiKey)
      .then(User => {
        NotificationManager.success('You are now logged in', 'Login Success');
        props.setUser(User);
      }, 
      error => {
        NotificationManager.error('Please try again', 'Login Failed');
        setIsSubmitting(false);
      })
  }

  return (
    <div className="row">
      <div className="col-md-6 login-form mx-auto">
        <h3>Login to xChat</h3>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text"
              name="username"
              className="form-control"
              placeholder="Your Username"
              value={uidValue}
              onChange={e => setUidValue(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input 
              type="submit"
              className="btn btn-primary btn-block"
              value={`${isSubmitting? 'Loading...': 'Login'}`}
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
  
    </div>
  );
};

export default Login;