import React,{ useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import './App.css';
import { NotificationContainer } from 'react-notifications';
import Login from './Login/Login';
import Chat from './Chat/Chat';

const App = () => {
  const [user, setUser] = useState(null);// user state and setter for that, it initializes as null;
  const renderApp = () => {// a mock to routes (Auth)
    if (user) {
      return <Chat user={user} /> // Note that when using hooks you won't neet copy the var to access into it;
    } else {
      return <Login setUser={setUser} /> // you can also pass thet setter as a props ;
    }
  };

  return (
    <div className="container">
      {renderApp()}
    </div>
  );
};

export default App;