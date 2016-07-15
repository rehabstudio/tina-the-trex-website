import * as actionTypes from 'constants/actionTypes';
import { API_ENDPOINT } from 'constants/app';
import 'whatwg-fetch';

let nextMessageId = 0;

export function sendClientMessage(message) {
  return {
    type: actionTypes.SEND_CLIENT_MESSAGE,
    id: nextMessageId++,
    message
  };
}

export function receiveServerMessage(message) {
  return {
    type: actionTypes.RECEIVE_SERVER_MESSAGE,
    id: nextMessageId++,
    message
  };
}

export function postNewMessage(message) {
  return dispatch => {
    dispatch(sendClientMessage(message));

    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data['messages']) {
          let messages = data['messages'];
          messages.forEach((message, index) => {
            setTimeout(() => {
              dispatch(receiveServerMessage(messages.shift()));
            }, (message['delay'] * index));
          });
        }
      });
  };
}
