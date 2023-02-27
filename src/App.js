
import { useState } from 'react';
import SecretInfo from './scenes/SecretInfo';
import Login from './scenes/Login';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
    {isLoggedIn
    ? <SecretInfo />
    : <Login setLoggedIn={setLoggedIn}/>
    }
    </>
  );
}

export default App;
