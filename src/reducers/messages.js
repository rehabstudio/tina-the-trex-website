import * as actionTypes from 'constants/actionTypes';

const initialState = [];

const message = (state, action) => {
  switch (action.type) {
    case actionTypes.SEND_CLIENT_MESSAGE:
    case actionTypes.RECEIVE_SERVER_MESSAGE:
      return {
        text: action.message.text,
        conversation_id: action.message.conversation_id,
        sender: action.message.sender
      };
  }
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_CLIENT_MESSAGE:
    case actionTypes.RECEIVE_SERVER_MESSAGE:
      return [
        ...state,
        message(undefined, action)
      ];
    default:
      return state;
  }
};

export default messages;
