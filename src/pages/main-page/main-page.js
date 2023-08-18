import UsersList from "../../components/users-list/users-list";
import users from "../../mock/mock";

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <UsersList users={users} />
      </div>
    </main>
  )
}

export default MainPage