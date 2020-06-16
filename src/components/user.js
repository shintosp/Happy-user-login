import React from "react";

const User = function(props) {
  return (
    <li>
      <p>
        <strong>Id: </strong>
        {props.user.id}
      </p>
      <p>
        <strong>Name: </strong>
        {props.user.name}
      </p>
      <p>
        <strong>Age: </strong>
        {props.user.age}
      </p>
      <p>
        <strong>GmailId: </strong>
        {props.user.email}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.user.gender}
      </p>
      <p>
        <strong>PhoneNo: </strong>
        {props.user.phoneNo}
      </p>
    </li>
  );
};

export default User;
