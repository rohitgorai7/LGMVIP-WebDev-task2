import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Nav from './nav';
const App=()=> {
  const [users, setUsers] = useState([]);
  const loadUsers= async()=>{
    const {data} = await axios.get(`https://reqres.in/api/users`);
    console.log(data);
    setUsers(data.data);
  };
  return (
    <div className="App">
      <Nav />
      <div>
        <div className="content">
          <button onClick={()=> loadUsers()}>Get Users</button>
        </div>        
        <div className="cont">       
        <h1>Users:</h1>
          {
            users && users.map((c) =>(
              <div className="users">
                <img variant="top" src={c.avatar} alt="user-logo" />
                <div>
                  <p>User id: {c.id}</p>
                  <h2>{c.first_name} {c.last_name}</h2>
                  <p>
                    {c.email}
                  </p>
                </div>
              </div>         
              ))
          }
        </div>        
      </div>            
    </div>
  );
}

export default App;
