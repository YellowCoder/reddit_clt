// @flow
import React, { Component } from 'react';
import styles from './SubReddit.css';

type Props = {};

export default class SubReddit extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <h2>Home</h2>
      </div>
    );
  }
}
