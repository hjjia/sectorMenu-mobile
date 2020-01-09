import React, { Component } from 'react';
import styles from './App.css';

import SectorMenu from './components/SectorMenu';
class App extends Component {
  render() {

    return (
      <div className={styles.App}  >
        <SectorMenu
          sectorMenuItems={['A1', 'A2', 'A3']}
          sectorMenuItemFunctions={[function () { console.log(0) }, function () { console.log(1) }, function () { console.log(2) }]}
        />
      </div>
    );
  }
}
export default App;
