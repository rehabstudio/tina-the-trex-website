import React from 'react';
import ReactDOM from 'react-dom';

import MessageListItem from './MessageListItem/MessageListItem';
import styles from './styles.module.css';

class MessageList extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    let node = ReactDOM.findDOMNode(this.refs.messageList);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.shouldScrollBottom) {
      let node = ReactDOM.findDOMNode(this.refs.messageList);
      node.scrollTop = node.scrollHeight;
      console.log(node.scrollTop);
      console.log(node.scrollHeight);
    }
  }

  render() {
    const { messages } = this.props;

    return (
      <div className={styles.chatBox} ref="messageList">
        <ul className={styles.messageList}>
          { messages.map(this.renderItem) }
        </ul>
      </div>
    );
  }

  renderItem(message, i) {
    return (
      <MessageListItem key={i} message={message} />
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array
};

export default MessageList;
