// @flow
import React, { Component } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import SubReddit from '../components/sidebar/SubReddit';

import { apiFetchSubreddit } from '../api/subreddit';

type Props = {};

export default class SidebarContainer extends Component<Props> {
  props: Props;

  get defaultSubReddits() {
    return [
      { name: 'Best', path: '/best.json' },
      { name: 'Hot', path: '/hot.json' },
      { name: 'Rising', path: '/rising.json' },
      { name: 'New', path: '/new.json' },
      { name: 'Gilded', path: '/gilded.json' },
      { name: 'Top', path: '/top.json' },
      { name: 'Controversial', path: '/r/controversial.json' },
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
        />
      </div>
    );
  }
}
