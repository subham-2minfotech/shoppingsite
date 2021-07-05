import React from 'react'
import { TextField, Button } from '@material-ui/core';

function Signupform() {
  return (
    <React.Fragment>
      <TextField
        id="standard-basic"
        label="Enter Mobile number"
        fullWidth
      />

      <p style={{ color: '#878787', fontSize: '12px', padding: '20px 0 0 0' }}>
        By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
      </p>

      <Button
        variant="contained"
        style={{maxWidth: '100%', maxHeight: '47px', minWidth: '100%', minHeight: '47px', fontWeight: '600', backgroundColor: '#FB641B', color: '#FFFFFF', font: '15px', fontFamily: 'Roboto, Arial, sans-serif'}}
      >
        CONTINUE
      </Button>

      <Button
        variant="contained"
        style={{maxWidth: '100%', maxHeight: '47px', minWidth: '100%', minHeight: '47px', fontWeight: '550', marginTop: '15px', textTransform: 'none', backgroundColor: '#FFFFFF', color: '#2874F0', fontFamily: '15px Roboto, Arial, sans-serif'}}
      >
        Existing User? Log in
      </Button>

    </React.Fragment>
  )
}

export default Signupform
