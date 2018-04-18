// @flow
import React, { Component } from 'react';

import Item from '../components/sidebar/Item';

type Props = {};

export default class SidebarContainer extends Component<Props> {
  props: Props;

  get defaultSubReddits() {
    return [
      { name: 'Best', path: '/best.json' },
      { name: 'Hot', path: '/hot.json' },
      { name: 'Rising', path: '/rising.json' },
      { name: 'New', path: '/new.json' },
      { name: 'Top', path: '/top.json' },
      { name: 'Controversial', path: '/r/controversial.json' },
      { name: 'Popular', path: '/r/popular.json' },
    ]
  }

  render() {
    return (
      <div>
        <Item
          defaultSubReddits={this.defaultSubReddits}
        />
      </div>
    );
  }
}
