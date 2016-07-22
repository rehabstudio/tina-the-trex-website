import React, { PropTypes } from 'react';
import styles from './styles.module.css';
import { CLIENT_USER_NAME, SERVER_USER_NAME } from 'constants/app';

let ENTER_KEY_CODE = 13;

class MessageComposer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <div className={styles.messageComposer}>
        <div>
          <textarea
            className={styles.messageInput}
            rows="1"
            name='message'
            placeholder='Type here to chat with T.Rex'
            value={this.state.text}
            onChange={this._onChange.bind(this)}
            onKeyDown={this._onKeyDown.bind(this)}
          />
          <svg className={styles.sendButton} fill="#99B2D4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </div>
      </div>
    );
  }

  _onChange(event, value) {
    this.setState({ text: event.target.value });
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      let text = this.state.text.trim();
      if (text) {
        let message = {
          text,
          sender: CLIENT_USER_NAME
        };
        this.props.actions.postNewMessage(message);
      }
      this.setState({ text: '' });
    }
  }

}

MessageComposer.propTypes = {
  actions: React.PropTypes.object
};

export default MessageComposer;
