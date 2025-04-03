import UserCard from "./UserCard"
import React, {useState, useEffect} from "react"

function App() {
  
  const [users, setUsers] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching user data", error))
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm);
  });
  console.log("users", users)
  console.log("filtered users", filteredUsers)

  return (
    <>
      <h1>User Profile</h1>
      <input type="text" placeholder="Search users..." onChange={handleSearch} value = {searchTerm} />
      <div className="outer">
      {filteredUsers.map((user) => (
        <UserCard key = {user.id} user={user}/>
      ))}
      </div>
    </>
  )
}

export default App
