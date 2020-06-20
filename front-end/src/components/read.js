import React from "react";
import axios from "axios";

class  Read extends React.Component {

  constructor(){
    super();

    //this.onChangeUserName = this.onChangeUserName.bind(this);

    this.state = {
      users:[],
    }

}


  componentDidMount(){
    axios.get(`http://localhost:4000/users/`)
    .then(response => {
      this.setState({
        users: response.data,
      });
      
      console.log(response.data);
    
    })

    .catch(error => {
      console.log(error);
    });
     
  }
            render(){
              const {users} = this.state;
              
    return(
<div className="container-fluid">

<table class="table">
  <thead>
    <tr>
      <th scope="col"># - ID</th>
      <th scope="col">User Name</th>

    </tr>
  </thead>
  <tbody>
  {users.map(user => (
    <tr>
      <th scope="row">{user._id}</th>
      <td>{user.username}</td>
    </tr>
  ))}
  </tbody>
</table>
</div>
    );

}
}

export default Read;