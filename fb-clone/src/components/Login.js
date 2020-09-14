import React from 'react'
import '../css/Login.css'
import { Button } from '@material-ui/core'


function Login() {
const signIn = () => {
// sign In
}
  return (
    <div className="login">
      <div className="login-logo">
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png" alt="logo"
      />
      <img
      src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="fb"
      />
      </div>
      <Button type='submit' onClick={signIn}
      > Sign In
      </Button>
    </div>
  );
}

export default Login
