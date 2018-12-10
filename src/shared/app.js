import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import NoMatch from './nomatch';

import Routes from './routes';

const app = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        {Routes.map(({ path, exact, component: Comp, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <Comp {...props} {...rest} />}
          />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default app;
