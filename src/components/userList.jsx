import React, { Component } from "react";
import User from "./user";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    //let url = 'https://reqres.in/api/users?page=2';
    //fetch(url).then((res)=>res.json()).then((users)=>(this.setState({users: users.data}))).catch();
    let jsonData = JSON.parse(
      '{"user":[{"id":"1","name":"test1","age" : "11","gender":"male","email" : "test1@gmail.com","phoneNo" : "9415346313"},{"id":"2","name":"test2","age" : "12","gender":"male","email" : "test2@gmail.com","phoneNo" : "9415346314"},{"id":"3","name":"test3","age" : "13","gender":"male","email" : "test3@gmail.com","phoneNo" : "9415346315"},{"id":"4","name":"test4","age" : "14","gender":"male","email" : "test4@gmail.com","phoneNo" : "9415346316"},{"id":"5","name":"test5","age" : "15","gender":"male","email" : "test5@gmail.com","phoneNo" : "9415346317"},{"id":"6","name":"test6","age" : "16","gender":"male","email" : "test6@gmail.com","phoneNo" : "9415346318"}]}'
    );
    console.log(jsonData);
    this.setState({ users: jsonData.user }, () =>
      console.log(this.state.users)
    );
  }
  render() {
    return (
      <div className="user-list-page">
        <h1>User List</h1>
        <ul className="user-block">
          {this.state.users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UserList;
