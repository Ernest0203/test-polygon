import actions from './actions';

const initialState = {

};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}