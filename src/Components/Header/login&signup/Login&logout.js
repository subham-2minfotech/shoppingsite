import React from 'react'
import '../Header.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/login&logout/action';

function LoginLogout() {
  const isLogged = useSelector(state => state.isLogged)
  console.log(`isLogged ? `, isLogged);
  const dispatch = useDispatch()

  // const logedout = () => {
  //   dispatch(logout())
  // }

  return (
    <React.Fragment>
      {
        (isLogged) ?
        <button className="restheaderCButton" onClick={() => dispatch(logout())}>Logout</button>
        :
        <button className="restheaderCButton">Login</button>
      }
    </React.Fragment>
  )
}

export default LoginLogout
