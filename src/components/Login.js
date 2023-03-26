import React, { useEffect, useState } from "react";
import '../App.css'
function Login() { 
  const [user, setUser] = useState([]);
  console.log(user)
   
  const fetchData = () => {
     fetch("https://jsonplaceholder.typicode.com/photos/1")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
     {
        <img src={user.url} alt="" className="img" />
     }
      
    </main>
  );
}

export default Login;