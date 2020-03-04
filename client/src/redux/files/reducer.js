import actions from './actions';

const initialState = {
  files: []
};

export default function files(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}