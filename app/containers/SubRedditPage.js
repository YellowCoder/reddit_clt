// @flow
import React, { Component } from 'react';

import { apiFetchSubreddit } from '../api/subreddit'
import SubReddit from '../components/SubReddit';

type Props = {};

export default class SubRedditPage extends Component<Props> {
  props: Props;

  constructor() {
    super()
    this.state = {
      isLoading: true,
      list: {}
    }
  }

  componentWillMount() {
    this.fetchPosts(this.props.location.params)
  }

  componentWillReceiveProps(newProps) {
    this.fetchPosts(newProps.location.params)
  }

  fetchPosts(subreddit) {
    if (!subreddit) return

    apiFetchSubreddit(subreddit.path)
      .then((response) => {
        this.setState({
          list: response.data.data.children,
          isLoading: false,
          subreddit
        })
      })
  }

  renderList(list) {
    return list.map((post) => {
      return(
        <SubReddit key={post.data.id} post={post.data} />
      )
    })
  }

  render() {
    const { isLoading, subreddit, list } = this.state;

    return (
      <div>
        { isLoading &&
          <p>Loading ...</p>
        }

        { !isLoading &&
          <div>
            <h1>{ subreddit.name }</h1>
            { this.renderList(list) }
          </div>

        }
      </div>
    );
  }
}
