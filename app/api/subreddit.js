import axios from 'axios';

export function apiFetchSubreddit(subredditPath) {
  return axios({
    method: 'GET',
    url: `https://www.reddit.com/${subredditPath}`
  });
}

export default apiFetchSubreddit;
