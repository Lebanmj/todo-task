import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users`;
      const res = await fetch(urltext, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Error fetching categories");
      }
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      console.error(error);
    }
  };
  const UpdateUsers = async () => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users`;
      const res = await fetch(urltext, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Error fetching categories");
      }
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      console.error(error);
    }
  };
  const DeleteUsers = async () => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users`;
      const res = await fetch(urltext, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Error fetching categories");
      }
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      console.error(error);
    }
  };
  const PostUsers = async () => {
    try {
      let urltext = `https://jsonplaceholder.typicode.com/users`;
      const res = await fetch(urltext, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Error fetching categories");
      }
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // empty dependency array to ensure it runs once when the component mounts

  return (
    <>
     <div class="container">
 <h1 class="mb-4">UserList </h1>
     
      {userList.map(({ id, name, username, email, address }) => (
        <div key={id}>
          <h4>{name}</h4>
          {/* Add other user details as needed */}
        </div>
      ))}
      </div>
    </>
  );
};

export default UserList;
