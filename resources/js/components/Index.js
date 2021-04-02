import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './add';
import Edit from './edit';
import Home from './home';

function Index(props) {
    return (
     <BrowserRouter>
     <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/:id/edit" exact component={Edit}/>
         <Route path="/add" exact component={Add}/>
         
     </Switch>
     </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}