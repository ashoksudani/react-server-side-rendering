import Home from './home';
import Grid from './grid';

import fetchPopularRepos from './api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => {
      // return Promise.resolve([]);
      return fetchPopularRepos(path.split('/').pop());
    }
  }
];

export default routes;
