import { useEffect, useState } from "react"

function UsersSection() {
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/AlfredK04/contact")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} style={{backgroundColor: user.favouriteColour}}>
            <img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} />
            
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>
              {user.email}
            </p>
          </li>
        ))}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
