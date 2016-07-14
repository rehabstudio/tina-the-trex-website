import * as actionTypes from 'constants/actionTypes';

let nextMessageId = 0;

export function createMessage(message) {
  return {
    type: actionTypes.CREATE_MESSAGE,
    id: nextMessageId++,
    message
  };
}

export function receiveMessage(message) {
  return {
    type: actionTypes.RECEIVE_MESSAGE,
    id: nextMessageId++,
    message
  };
}

export function postNewMessage(message) {
  return dispatch => {
    let id = 'm_' + Date.now();
    console.log(message);
    let createdMessage = Object.assign({}, {id}, message);
    dispatch(createMessage(createdMessage));

    fetch('//prod.talktothetrex.com/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createdMessage)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data['messages']) {
          let messages = data['messages'];
          messages.forEach(message => {
            dispatch(receiveMessage(message));
          });
        }
      });
  };
}
