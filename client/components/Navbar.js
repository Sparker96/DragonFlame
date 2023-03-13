import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../store';
import { removeUserToken } from '../utils';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <nav>
        {user ? (
          <>
            {/* The navbar will show these links after you log in */}
            <div className='buttonContainer'>
            <Link to='/character-select'>Temp</Link>
            </div>
            <Link
              className='logout'
              onClick={() => {
                dispatch(setUser(null));
                removeUserToken();
                navigate('/');
              }}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            {/* The navbar will show these links before you log in */}
            <div className='buttonContainer'>
            <Link to='/login' className='login'>
              Login
            </Link>
            <Link to='/signup' className='signup'>
              Sign Up
            </Link>
            </div>
          </>
        )}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
