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

    return (
      <li className={listItem}>
        <Profile sender={message.sender} />
        <p className={styles.messageText}>{message.text}</p>
      </li>
    );
  }

}

MessageListItem.propTypes = {
  message: PropTypes.object
};

export default MessageListItem;
