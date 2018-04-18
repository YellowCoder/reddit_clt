// @flow
import React, { Component } from 'react';
import styles from './SubReddit.css';

type Props = {
  post: ObjectConstructor
};

export default class SubReddit extends Component<Props> {
  props: Props;

  render() {
    const { post } = this.props;

    return (
      <div className={styles.container}>
        { post.thumbnail !== 'default' &&
          <img src={post.thumbnail} alt={post.title} />
        }

        { post.thumbnail === 'default' &&
          <span>Missing image!</span>
        }
        <div className={styles.info}>
          <div className={styles.title}>
            { post.title }
          </div>
          <div>
            { post.author }
          </div>
          <div>
            <span>
              ups: { post.ups }
            </span>
            <span>
              downs: { post.downs }
            </span>
          </div>

          <div>
            <span>
              comments: { post.num_comments }
            </span>
          </div>
        </div>
      </div>
    );
  }
}
