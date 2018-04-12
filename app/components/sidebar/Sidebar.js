// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.css';

type Props = {};

export default class Sidebar extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleBar} />
        <Link to="/">
          Home
        </Link>
      </div>
    );
  }
}
