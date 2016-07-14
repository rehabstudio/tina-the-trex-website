import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import styles from './styles.module.css';

class App extends React.Component {

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    );
  }

  render() {
    return (
      <div className={styles.container}>
        {this.content}
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

App.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired
};

export default App;
