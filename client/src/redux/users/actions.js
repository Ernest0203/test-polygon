const actions = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  SIGNIN: 'SIGNIN',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNUP: 'SIGNUP',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  signin: user => ({
    type: actions.SIGNIN,
    user
  }),
  signup: user => ({
    type: actions.SIGNUP,
    user
  }),
}

export default actions;