// @flow
import React, { Component } from 'react';
import styles from './SubReddit.css';
import { Link } from 'react-router-dom';

type Props = {
  defaultSubReddits: Array,
  subRedditClicked: FunctionConstructor
};

export default class SubReddit extends Component<Props> {
  props: Props;

  render() {
    const { defaultSubReddits, subRedditClicked } = this.props;

    return (
      <div className={styles.container}>
        {
          defaultSubReddits.map((subredditItem, index) => {
            return (
              <div key={index}>
                <Link to={{
                  pathname: `/subreddit/${subredditItem.name}`,
                  params: {...subredditItem},
                }}>
                  { subredditItem.name }
                </Link>
              </div>
            )
          })
        }
      </div>
    );
  }
}
