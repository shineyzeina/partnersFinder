import * as React from 'react';
import './App.css';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './components/Home';



class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        
        <Switch>
          <Route path={'/'} exact component={Home} />
          
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
