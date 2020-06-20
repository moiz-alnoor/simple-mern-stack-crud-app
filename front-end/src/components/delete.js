import React from "react";
import axios from "axios";
import Create from './create'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class  Delete  extends React.Component {

  
  constructor(){
    super();
    this.state = {
      users:[],
      submitDelete:'',
      deleteMessage:false,
    }
    this.submitDelete = this.submitDelete.bind(this);
    this.createNotification = this.createNotification.bind(this);

}

createNotification = () => {
        NotificationManager.info('Info message');
  };



submitDelete = (_id) => {
  //alert(_id);
  
  confirmAlert({
  
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => axios.delete(`http://localhost:4000/users/delete/`+_id)
        .then(response => {
          this.setState({
            users: this.state.users.filter(el => el._id !== _id),
            deleteMessage: true,
          });
          
        }),
      },
      {
        label: 'No',
        onClick: () => {}
      }
    ]
  });
};

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
              const {users , deleteMessage} = this.state;
              if(deleteMessage){  this.createNotification()
              }
               
    return(
<div className="container-fluid">
       
<table class="table">
  <thead>
    <tr>
      <th scope="col"># - ID</th>
      <th scope="col">User Name</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
  {users.map(user => (
    <tr>
      <th scope="row">{user._id}</th>
      <td>{user.username}</td>
      <td>     <button type="submit" class="btn btn-outline-danger" 
      onClick={this.submitDelete.bind(this,user._id)}>Delete</button></td>
    </tr>
  ))}
  </tbody>
</table>
<NotificationContainer/>
</div>
    );

}
}

export default Delete;