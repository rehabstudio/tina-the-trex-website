import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerText}>
          <Link to="https://rehabstudio.com/">A +rehabstudio hackweek project</Link>
        </div>
        <div className={styles.makeItBetterText}>Making it better</div>
      </div>
    );
  }
}

export default Header;
