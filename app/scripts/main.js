import React  from 'react';
import Router from 'react-router';

import Navigation from 'components/navigation';
import HelloWorld from 'components/hello_world';
import DiverList  from 'components/divers/index';
import DiverEdit  from 'components/divers/edit';
import DiveList   from 'components/dives/index';
import DiveEdit   from 'components/dives/edit';
import MeetList   from 'components/meets/index';
import MeetEdit   from 'components/meets/edit';
import MeetTeam   from 'components/meets/team';
import MeetScore  from 'components/meets/score';

let {Route, DefaultRoute} = Router;

let routes = (
  <Route path="/" handler={Navigation}>
    <Route name="divers:list" path="divers" handler={DiverList} />
    <Route name="divers:edit" path="divers/?:key?" handler={DiverEdit} />
    <Route name="dives:list" path="dives" handler={DiveList} />
    <Route name="dives:edit" path="dives/?:key?" handler={DiveEdit} />
    <Route name="meets:list" path="meets" handler={MeetList} />
    <Route name="meets:edit" path="meets/?:key?" handler={MeetEdit} />
    <Route name="meets:score" path="meets/:key/score" handler={MeetScore} />
    <Route name="meets:team" path="meets/:key/team/:team" handler={MeetTeam} />
    <DefaultRoute name="home" handler={HelloWorld}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
