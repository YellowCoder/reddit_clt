// @flow
import React, { Component } from 'react';
import styles from './SubReddit.css';

type Props = {};

export default class SubReddit extends Component<Props> {
  props: Props;

  render() {
    const { post } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          { post.title }
        </div>
      </div>
    );
  }
}
