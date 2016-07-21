import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.ngLogo}></div>
        <div className={styles.titleLogo}></div>
        <div className={styles.rehabLogo}></div>
      </div>
    );
  }
}

export default Header;
