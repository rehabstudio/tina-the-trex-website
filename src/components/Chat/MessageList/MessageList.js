import React from 'react';
import ReactDOM from 'react-dom';

import MessageListItem from './MessageListItem/MessageListItem';
import styles from './styles.module.css';

class MessageList extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    let node = ReactDOM.findDOMNode(this.refs.scrollWrapper);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState) {
    let node = ReactDOM.findDOMNode(this.refs.scrollWrapper);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    const { messages } = this.props;

    return (
      <div className={styles.chatBox}>
          <div className={styles.listWrapper}>
              <div className={styles.scrollWrapper} ref="scrollWrapper">
                <ul className={styles.messageList}>
                  { messages.map(this.renderItem) }
                </ul>
              </div>
          </div>
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
