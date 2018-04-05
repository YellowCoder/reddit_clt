// @flow
import React, { Component } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import SubReddit from '../components/sidebar/SubReddit';

import { apiFetchSubreddit } from '../api/subreddit';

type Props = {};

export default class SidebarContainer extends Component<Props> {
  props: Props;

  componentWillMount() {
  }

  subredditClicked(subReddit) {
    console.log(this.props.navigation)
    // apiFetchSubreddit(subredditPath)
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  get defaultSubReddits() {
    return [
      { name: 'Hot', path: '/hot.json' },
      { name: 'New', path: '/new.json' },
      { name: 'Top', path: '/top.json' },
      { name: 'Popular', path: '/r/popular.json' },
      { name: 'Controversial', path: '/r/controversial.json' }
    ]
  }

  render() {
    return (
      <div>
        <Sidebar />
        <SubReddit
          defaultSubReddits={this.defaultSubReddits}
          subRedditClicked={this.subredditClicked.bind(this)}
        />
      </div>
    );
  }
}
