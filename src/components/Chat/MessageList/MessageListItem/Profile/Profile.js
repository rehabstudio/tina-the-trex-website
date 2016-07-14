import React, { PropTypes } from 'react';
import styles from './styles.module.css';
import { CLIENT_USER_NAME, SERVER_USER_NAME } from 'constants/app';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Profile extends React.Component {

  render() {
    let { sender } = this.props;

    let profile = cx({
      profile: true,
      user: sender == CLIENT_USER_NAME,
      trex: sender == SERVER_USER_NAME
    });

    return (
      <div className={styles.profileContainer}>
        <div className={profile}></div>
        <p className={styles.sender}>{sender}</p>
      </div>
    );
  }
}

Profile.propTypes = {
  sender: PropTypes.string
};

export default Profile;
