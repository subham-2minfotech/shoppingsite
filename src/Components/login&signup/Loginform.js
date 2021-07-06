import React from 'react'
import { TextField, Button } from '@material-ui/core';

function Loginform() {
  return (
    <React.Fragment>
      <TextField
        id="standard-basic"
        label="Enter Mobile number"
        fullWidth
      />
      <br /><br />
      <TextField
        id="standard-basic"
        label="Enter Password"
        fullWidth
        type='password'
      />

      <p style={{ color: '#878787', fontSize: '12px', padding: '20px 0 0 0' }}>
        By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
      </p>

      <Button
        variant="contained"
        style={{
          maxWidth: '100%',
          maxHeight: '47px',
          minWidth: '100%',
          minHeight: '47px',
          fontWeight: '550',
          marginTop: '15px',
          textTransform: 'none',
          backgroundColor: '#fb641b',
          color: '#FFFFFF',
          fontFamily: '15px Roboto, Arial, sans-serif'
        }}
      >
        Login
      </Button>

      <br /><br />
      <div style={{
        textAlign: 'center',
        color: '#878787',
        fontSize: '12px',
        fontWeight: 500,
      }}
      >
        or
      </div>
      <br />

      <Button
        variant="contained"
        style={{
          maxWidth: '100%',
          maxHeight: '47px',
          minWidth: '100%',
          minHeight: '47px',
          fontWeight: '550',
          marginTop: '15px',
          textTransform: 'none',
          backgroundColor: '#FFFFFF',
          color: '#2874F0',
          fontFamily: '15px Roboto, Arial, sans-serif'
        }}
      >
        Request OTP
      </Button>

      <div style={{
        textAlign: 'center',
        color: 'rgb(40, 116, 240)',
        marginTop: '83px',
        fontWeight: '600',
        fontSize: '14px',
      }}
      >
        <a href="https://www.w3schools.com">New to Flipkart? Create an account</a>
      </div>
    </React.Fragment >
  )
}

export default Loginform
