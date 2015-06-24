import React  from 'react';
import Router from 'react-router';

import Navigation from 'components/navigation';
import HelloWorld from 'components/hello_world';
import DiverEdit from 'components/divers/edit';
import DiverList from 'components/divers/index';
import DiveEdit from 'components/dives/edit';
import DiveList from 'components/dives/index';

let {Route, DefaultRoute} = Router;

let routes = (
  <Route path="/" handler={Navigation}>
    <Route name="divers:list" path="divers" handler={DiverList} />
    <Route name="divers:edit" path="divers/?:key?" handler={DiverEdit} />
    <Route name="dives:list" path="dives" handler={DiveList} />
    <Route name="dives:edit" path="dives/?:key?" handler={DiveEdit} />
    <DefaultRoute name="home" handler={HelloWorld}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
