import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './component/login/login'
import Register from './component/register/register'
function App() {
  
  const [signIn,setSignIn]=useState(false)
  const [signOut,setSignOut]=useState(false)


  function login(){
    setSignIn(signIn ? false : true);
    setSignOut(signOut ? false : true);
  }
 
  return (
    <div className="App">
        
        <div className="storeData">
                
                <button onClick={login}>{signIn ? "Sign out" : "Sign in"}</button>
                <h3>{signOut ? "You are Welcome" : "Please Sign in"}</h3>
        </div> 

        <Login/>
        <Register/>
    </div>
  );
}

export default App;

