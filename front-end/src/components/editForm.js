import React from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class  editForm extends React.Component {

  constructor(){
    super();

    this.onChangeUserName = this.onChangeUserName.bind(this);

    this.state = {
      users:[],
      editUser:[],
      deleteMessage:''
    }

}
 createNotification = () => {
    NotificationManager.info('Info message');
  };
  

  componentDidMount(){
    const { handle } = this.props.match.params
    console.log(handle)
    axios.get(`http://localhost:4000/users/`+this.props.match.params.id)
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

onSubmit=(e)=>{
    e.preventDefault(); 
      const userData = {
      username: this.state.username,
      }
  
      axios.post(`http://localhost:4000/users/update/`+this.props.match.params.id,userData)
        .then(response => {
            this.setState({
                 deleteMessage: true,
               });
            }).catch(error => {
           console.log(error);
    });
  }
      
      render(){
              const {users,deleteMessage} = this.state;
              if(deleteMessage){  this.createNotification();
              }
            
    return(
<div className="container-fluid">

            <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Example label</label>
              <input type="text" className="form-control"
               id="username"
               defaultValue={users.username}
               onChange={this.onChangeUserName}
                />
            </div>
          
            <button type="submit" class="btn btn-primary">Primary</button>
          </form>
          <NotificationContainer/>

        </div>
    )
  
  
          }

         
    }


export default editForm;