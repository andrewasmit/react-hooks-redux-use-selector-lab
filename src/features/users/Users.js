import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector(state=>state.users);

  const usersToDisplay = users.map(user=>{
    return <li>{user.username}</li>
  });

  const totalUsers = ` Total Users: ${users.length}`

  return (
    <div>
      <ul>
        Users!
        {usersToDisplay}
        {/* {users.length} */}
        {totalUsers}
      </ul>
    </div>
  );
}

export default Users;
