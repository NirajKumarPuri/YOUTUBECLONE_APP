import React from 'react';
import styles from './App.module.css';
import Fetchdata from './Fetchdata/index.js';
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Fetchdata />
      </div>
    );
  }
}
export default App;
