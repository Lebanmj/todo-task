import React, { useState, useEffect } from 'react';
// import { PencilSquare } from 'react-bootstrap-icons';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [updatedUserName, setUpdatedUserName] = useState('');

  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
  });

  const fetchUsers = async () => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users`;
      const res = await fetch(urltext);
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async () => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users`;
      const res = await fetch(urltext, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        throw new Error("Error adding user");
      }

      const data = await res.json();
      setUserList([...userList, data]);
      setNewUser({
        name: '',
        username: '',
        email: '',
        address: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (userId, updatedUser) => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users/${userId}`;
      const res = await fetch(urltext, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!res.ok) {
        throw new Error("Error updating user");
      }

      const data = await res.json();
      const updatedList = userList.map(user => (user.id === userId ? data : user));
      setUserList(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users/${userId}`;
      const res = await fetch(urltext, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Error deleting user");
      }

      const updatedList = userList.filter(user => user.id !== userId);
      setUserList(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // empty dependency array to ensure it runs once when the component mounts

  return (
    <>
      <div className="container">
        <h1 className="mb-4">UserList </h1>

        {/* Display Users */}
        {userList.map(({ id, name, username, email, address }) => (
  <div key={id} className="user-item">
    <h4>{name}</h4>
    <div className="user-actions">
      <input
        type="text"
        placeholder="New Name"
        value={updatedUserName}
        onChange={(e) => setUpdatedUserName(e.target.value)}
      />
      <button onClick={() => updateUser(id, { name: updatedUserName })}>
        Update Name
      </button>
       <i
          className="fa-regular fa-trash-can icon-delete" onClick={() => deleteUser(id)}></i>
    </div>
  </div>
  
))}

<br/>

        {/* Add User Form */}
        <div>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          {/* Add other input fields as needed */}
          <button onClick={addUser}>Add User</button>
        </div>
      </div>
      <br/>
      <br/>
    </>
  );
};

export default UserList;
