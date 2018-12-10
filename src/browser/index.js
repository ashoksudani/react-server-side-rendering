import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../shared/app';

ReactDom.hydrate(
  <BrowserRouter>
    {/* <App data={window.__INITIAL_DATA__} /> */}
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
