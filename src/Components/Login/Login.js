import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom'

function Login() {

  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('');

  const {firebase} = useContext(FirebaseContext)
  const history = useHistory();

  const handlesubmit=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch((error)=>{
      console.log(error)
    })
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
           className="input"
           type="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           id="fname"
           name="email"
           defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
