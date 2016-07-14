import * as actionTypes from 'constants/actionTypes';

const initialState = [];

const message = (state, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MESSAGE:
    case actionTypes.RECEIVE_MESSAGE:
      return {
        id: action.id,
        text: action.message.text,
        sender: action.message.sender
      };
  }
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MESSAGE:
    case actionTypes.RECEIVE_MESSAGE:
      return [
        ...state,
        message(undefined, action)
      ];
    default:
      return state;
  }
};

export default messages;
