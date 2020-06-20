import React from "react";
import axios from "axios";

class  Edit extends React.Component {

  constructor(){
    super();

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.submitEdit = this.submitEdit.bind(this);

    this.state = {
      users:[],
      editUser:[],
      id:''

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

  onChangeUserName(e) {
    this.setState({
      deleteMessage: false,
      username: e.target.value,
    });
  }


  submitEdit = (_id) => {
    
    this.setState({
    editUser: this.state.users.filter(el => el._id == _id),
    
  });

}

onSubmit=(e)=>{
    e.preventDefault(); 
    const userData = {
      username: this.state.username,
      }
  console.log(userData)
  axios.post(`http://localhost:4000/users/update`,userData)
        .then(response => {
            this.setState({
                 
                deleteMessage: true,
              });
            }).catch(error => {
           console.log(error);
    });
  
  }

      
      render(){
              const {users,editUser} = this.state;
              
    return(
<div className="container-fluid">

<table class="table">
  <thead>
    <tr>
      <th scope="col"># - ID</th>
      <th scope="col">User Name</th>
      <th scope="col">Edit</th>

    </tr>
  </thead>
  <tbody>
  {users.map(user => (
    <tr>
      <th scope="row">{user._id}</th>
      <td>{user.username}</td>
      <td><a href={"edit/"+user._id}><button type="submit" class="btn btn-primary" 
      > Edit
</button></a></td>
    </tr>
  ))}
  </tbody>
</table>
</div>
    )
  
  
          }

         
    }


export default Edit;