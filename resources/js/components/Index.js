import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import Home from './Home';

function Index(props) {
    return (
     <BrowserRouter>
     <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/edit" exact component={Edit}/>
         <Route path="/add" exact component={Add}/>
         <Route path="/delete" exact component={Delete}/>
     </Switch>
     </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}