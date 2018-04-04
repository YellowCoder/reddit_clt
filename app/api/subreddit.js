import axios from 'axios'

export function apiFetchSubreddit(subreddit) {
  return axios({
    method: 'GET',
    url: `https://www.reddit.com/r/${ subreddit }.json`
  })
}
