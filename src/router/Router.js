import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from '../App';
import Home from '../page/Home';
 
const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/home" component={Home} />
                      {/*路由不正确时，默认跳回home页面*/}
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);


export default Root;
 