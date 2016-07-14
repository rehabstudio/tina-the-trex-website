import React, { PropTypes as T } from 'react';
import * as Actions from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MessageList from './MessageList/MessageList';
import MessageComposer from './MessageComposer/MessageComposer';
import styles from './styles.module.css';

export class Chat extends React.Component {
  render() {
    const { messages, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <div className={styles.chatContainer}>
        <MessageList messages={messages} />
        <MessageComposer actions={actions} />
      </div>
    );
  }
}

Chat.propTypes = {
  actions: React.PropTypes.object,
  messages: React.PropTypes.array,
  dispatch: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(Chat);
