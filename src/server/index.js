import express from 'express';
import cors from 'cors';
import React from 'react';

import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';

import App from '../shared/app';
import routes from '../shared/routes';

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  var matchedRoute = routes.find(route => matchPath(req.path, route)) || {};

  var requestPromise = matchedRoute.fetchInitialData
    ? matchedRoute.fetchInitialData(req.path)
    : Promise.resolve([]);

  requestPromise
    .then(data => {
      const context = { data };
      const appMarkup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
      res.send(
        `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>First server side rendering app</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id='app'>${appMarkup}</div>
        </body>
      </html>
      `
      );
    })
    .catch(next);
});

app.listen(3000, () => {
  console.log('Server is listening to.... 3000');
});
