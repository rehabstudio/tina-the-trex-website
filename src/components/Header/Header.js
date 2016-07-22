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
        ></a>
        <div className={styles.padder}></div>
        <a 
            className={styles.titleLogo}
            href="/"
        ></a>
        <div className={styles.padder}></div>
        <a 
            className={styles.rehabLogo}
            href="https://www.rehabstudio.com"
        ></a>
      </div>
    );
  }
}

export default Header;
