// @flow
import React, { Component } from 'react';
import styles from './Item.css';
import { Link } from 'react-router-dom';

type Props = {
  defaultSubReddits: Array
};

export default class SubReddit extends Component<Props> {
  props: Props;

  constructor() {
    super()
    this.state = {
      selectedItem: ''
    }

    this.clicked = this.clicked.bind(this)
  }

  clicked(event) {
    this.setState({
      selectedItem: event.target.innerText
    })
  }

  render() {
    const { defaultSubReddits } = this.props;
    const { selectedItem } = this.state;

    return (
      <div className={styles.container}>
        {
          defaultSubReddits.map((subredditItem, index) => {
            return (
              <Link onClick={this.clicked}
                key={index}
                className={ selectedItem === subredditItem.name ? styles.selectedItem : styles.item}
                to={{
                  pathname: `/subreddit/${subredditItem.name}`,
                  params: {...subredditItem},
                }}>
                { subredditItem.name }
              </Link>
            )
          })
        }
      </div>
    );
  }
}
