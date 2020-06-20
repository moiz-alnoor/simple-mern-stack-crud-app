import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
} from "react-router-dom";
class  Nav extends React.Component {

            render(){

    return(

   <nav class="nav">
     <Link to="/" class="nav-link">create</Link>
      <Link to="/read" class="nav-link">Read</Link>
      <Link to="/edit" class="nav-link">Edit</Link>
      <Link to="/delete" class="nav-link">Delete</Link>
   </nav>

    );

}
}

export default Nav;