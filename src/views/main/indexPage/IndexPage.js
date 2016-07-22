import React, { PropTypes as T } from 'react';
import Chat from 'components/Chat/Chat';
import Header from 'components/Header/Header';

import styles from '../styles.module.css';

export class IndexPage extends React.Component {
  render() {
    return (
        <div className={styles.main}>
          <Chat />
          <Header />
        </div>
    );
  }
}

export default IndexPage;
