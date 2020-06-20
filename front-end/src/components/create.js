import React from "react";
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class  Create extends React.Component {

  constructor(){
    super();

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.createNotification = this.createNotification.bind(this);

    this.state = {
      username:'',
      deleteMessage:false,
    }
}

createNotification = () => {
  NotificationManager.info('Info message');
};

onChangeUserName(e) {
  this.setState({
    deleteMessage: false,
    username: e.target.value,
  });
}


onSubmit=(e)=>{
  e.preventDefault(); 
  const username = {
    username: this.state.username,
}

axios.post(`http://localhost:4000/users/add`,username)
      .then(response => {
          this.setState({
              username:'',   
              deleteMessage: true,
            });
     //     console.log(response.data)
          }).catch(error => {
     //     console.log(error);
  });

}

componentDidMount(){
  
}
 


            render(){
              const {users,deleteMessage} = this.state;
              if(deleteMessage){  this.createNotification();
              }
  
    return(
<div>
  <form onSubmit={this.onSubmit}>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Example label</label>
      <input type="text" className="form-control"
       id="username"
       value={this.state.username}
       onChange={this.onChangeUserName}
        />
    </div>
    <button type="submit" class="btn btn-primary">Primary</button>
  </form>
  <NotificationContainer/>
</div>);

}
}

export default Create;