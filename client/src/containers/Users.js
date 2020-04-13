import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Input from '../assets/ui/input';
import Button from '../assets/ui/button';

import actions from '../redux/users/actions';

const Users = () => {
  const dispatch = useDispatch();
  const fetchData = useCallback(args => dispatch({type: actions.FETCH_DATA}), [dispatch]);
  // useEffect(() => {
  //   (async () => await fetchData())();    
  // }, []);

  const form = (
    <div className="form">
      <Input type="text" placeholder="Login"/>
      <Input type="password" placeholder="Password"/>
      <div className="buttons">
        <Button text="Sign in" />
        <Button text="Sign up" />
      </div>
    </div>
  )

  return (
    <UsersWrapper>
      <div className="container">
        {form}
      </div>
    </UsersWrapper>     
  )
}

const UsersWrapper = styled.div`
  .container {
    display: flex;
  }
  .form {
    margin: auto;
    width: 200px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`

export default Users;