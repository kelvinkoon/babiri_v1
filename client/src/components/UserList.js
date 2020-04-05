import React from "react";
import UserItem from "./UserItem";

function isEmptyObject(obj) {
  var name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

const UserList = ({ users }) => {
  if (!isEmptyObject(users)) {
    const renderedUserList = users.map((user, index) => {
      return <UserItem user={user} key={user + index} />;
    });
    return <div className="row">{renderedUserList}</div>;
  } else {
    return <div>No results found</div>;
  }
};

export default UserList;
