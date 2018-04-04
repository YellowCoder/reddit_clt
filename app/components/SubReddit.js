// @flow
import React, { Component } from 'react';
import styles from './SubReddit.css';

type Props = {
};

export default class SubReddit extends Component<Props> {
  props: Props;

  render() {
    const { subRedditList } = this.props

    return (
      <div className={styles.container}>
        <ul>
          {
            subRedditList.map((subredditItem, index) => {
              return (<li key={ index }>
                { subredditItem.data.title }
              </li>)
            })
          }
        </ul>
      </div>
    );
  }
}
