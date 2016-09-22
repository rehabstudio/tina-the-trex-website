import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <a
            className={styles.ngLogo}
            href="https://www.facebook.com/ngkids"
            target="_blank"
        ></a>
        <div className={styles.padder}></div>
        <div className={styles.titleLogo}></div>
        <div className={styles.padder}></div>
        <a
            className={styles.rehabLogo}
            href="https://www.rehabstudio.com"
            target="_blank"
        ></a>
      </div>
    );
  }
}

export default Header;
