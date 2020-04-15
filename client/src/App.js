import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <form onSubmit = {(e) => login(e)}>
        <div style={{margin: '10px'}}>
        <input type="text" label="name" id="form-email"/>
        </div>
        <div style={{margin: '10px'}}>
        <input type="password" label="password" id = "form-password"/>
        </div>
     <button>Login</button>
     </form>
    </div>
  );
}

function login(e){
  e.preventDefault();
  let request = {
    email: document.getElementById('form-email').nodeValue,
    password: document.getElementById('form-password').value
  }
  axios.post('http://localhost:3000/login', request)
  .then(resp => {
    alert(resp.data.message)
  })
  .catch(e => {
    console.log(e)
  })
}

export default App;
