import TopList from "../top-list/top-list"
import User from "../user/user"
import './style.scss'

const UsersList = (users) => {
  return (
    <>
      <TopList />
      <ul className="user-list">
        {(users.users).map(user => {
          return (
            <User key={user.id} currentUser={user} />
          )
        })}
      </ul>
    </>
  )
}

export default UsersList