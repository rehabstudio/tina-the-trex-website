import React, { PropTypes } from 'react';
import styles from './styles.module.css';
import { CLIENT_USER_NAME, SERVER_USER_NAME } from 'constants/app';
import classNames from 'classnames/bind';
import Profile from './Profile/Profile';

let cx = classNames.bind(styles);

class MessageListItem extends React.Component {

  render() {
    let { message } = this.props;

    let listItem = cx({
      listItem: true,
      client: message.sender == CLIENT_USER_NAME,
      server: message.sender == SERVER_USER_NAME
    });

    if (message.sender == CLIENT_USER_NAME) {
      return (
        <li className={listItem}>
          <div className={styles.filler}></div>
          <p className={styles.messageText}>{message.text}</p>
        </li>
      );
    } else {
      return (
        <li className={listItem}>
          <Profile sender={message.sender} class={styles.profile}/>
          <p className={styles.messageText}>{message.text}</p>
          <div className={styles.filler}></div>
        </li>
      );
    }
  }

}

MessageListItem.propTypes = {
  message: PropTypes.object
};

export default MessageListItem;
