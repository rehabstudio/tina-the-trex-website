import React from 'react';
import MessageListItem from './MessageListItem/MessageListItem';
import styles from './styles.module.css';

class MessageList extends React.Component {

  render() {
    const { messages } = this.props;

    let messageListItems = messages.map((message) => {
      return (
        <MessageListItem key={message.id} message={message} />
      );
    });

    return (
      <div className={styles.chatBox}>
        <ul className={styles.messageList} ref="messageList">
          {messageListItems}
        </ul>
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array
};

export default MessageList;
