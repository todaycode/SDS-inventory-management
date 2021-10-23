import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getUser } from 'api';
import {
  HomePage,
  LocationsPage,
  Login,
  SDSInfoPage,
  SubstancesPage,
  UserManagementPage,
} from 'pages';

function Routes() {
  const [user, setUser] = React.useState(null);
  const location = window.location.pathname;
  React.useEffect(() => {
    if (location !== '/login/') {
      const getUserRequest = getUser();
      getUserRequest.then((response) => {
        if (response.status === 200) {
          setUser(response.data);
        }
      });
    }
  }, [location]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage user={user} />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/locations">
          <LocationsPage user={user} />
        </Route>
        <Route exact path="/sdsDetails/:sdsID">
          <SDSInfoPage user={user} />
        </Route>
        <Route exact path="/userManagement/">
          <UserManagementPage user={user} />
        </Route>
        <Route exact path="/substances/">
          <SubstancesPage user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
