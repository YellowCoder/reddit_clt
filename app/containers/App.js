// @flow
import * as React from 'react';

import styles from './App.css';
import Sidebar from './Sidebar';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}
