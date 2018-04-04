// @flow
import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import SubReddit from '../components/SubReddit';

import { apiFetchSubreddit } from '../api/subreddit'

type Props = {};

export default class SidebarContainer extends Component<Props> {
  props: Props;

  constructor() {
    super();

    this.state = {
      subRedditList: []
    }
  }

  componentWillMount() {
    apiFetchSubreddit('wtf')
      .then((result) => {
        this.setState({
          subRedditList: result.data.data.children
        })
      })
  }

  render() {
    return (
      <div>
        <Sidebar />
        <SubReddit subRedditList={this.state.subRedditList} />
      </div>
    );
  }
}
