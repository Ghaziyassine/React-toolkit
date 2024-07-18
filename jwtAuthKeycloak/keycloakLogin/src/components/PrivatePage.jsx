import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const PrivatePage = ({token}) => {
  const isRun = useRef(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
console.log(token)
    const config ={
      headers:{
        authorization:`Bearer ${token}`,
      }
    }
    axios.get("http://localhost:3000/api/users/",config)
      .then(res => { 
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>PrivatePage</div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default PrivatePage;
