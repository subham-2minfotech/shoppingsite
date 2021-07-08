import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function Loginform() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const recipeUrl = 'http://127.0.0.1:3000/users/login'
      // alert(JSON.stringify(values, null, 2));
      const requestMetadata = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (JSON.stringify(values))
      };
      fetch(recipeUrl, requestMetadata)
        .then(response => response.json())
        .then(data => {
          console.log('Success : data = ',);
          localStorage.setItem('login info', JSON.stringify(data, null, 2));
          localStorage.setItem('login', true);
          const asd = localStorage.getItem('login info')
          alert(asd)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  })
  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email Address"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br /><br />
        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <p style={{ color: '#878787', fontSize: '12px', padding: '20px 0 0 0' }}>
          By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
        </p>

        <Button
          variant="contained"
          type="submit"
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
      </form>

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
        color: '#2874F0',
        marginTop: '40px',
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
