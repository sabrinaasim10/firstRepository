import React from 'react';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    var { uname, pass} = document.forms[0];
    navigate('/home', {state: {userName: uname.value, password: pass.value}})
  }
  return(
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" />
      </div>
      <div className="button-container">
          <input type="submit" />
        </div>
    </form>
  </div>

  );
  }

export default LoginForm;