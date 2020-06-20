import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
} from "react-router-dom";

import Edit from './components/edit';
import Delete from './components/delete';
import Nav from './components/nav'
import Create from './components/create'
import  Read from './components/read'
import editForm from './components/editForm'

function App() {
  return( 
    <div className="container-fluid">
    <Router>
         <Nav/>
         <Route path="/" exact component={Create}/>
         <Route path="/read" exact component={Read}/>
         <Route path="/edit" exact component={Edit}/>
         <Route path="/delete" exact component={Delete}/>
         <Route path="/edit/:id" exact component={editForm}/>
    </Router>
   </div>
  );
}

export default App;
