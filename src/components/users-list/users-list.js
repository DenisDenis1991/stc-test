import { useEffect, useState } from "react"
import User from "../user/user"
import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from "../../store/api-action"
import { scrolling } from "../../store/data/data.slice"
import NewUser from "../new-user/new-user"

const UsersList = () => {
  const dispatch = useDispatch();
  const USER_PER_PAGE = 10;
  const filteredUsers = useSelector((state) => state.reducer.filteredUsers)
  const users = useSelector((state) => state.reducer.users)
  const [splitUsers, setSplitUsers] = useState(USER_PER_PAGE);
  const newUser = useSelector((state) => state.reducer.newUser)
  const totalCount = useSelector((state) => state.reducer.countUsers)
  const scrol = useSelector((state) => state.reducer.scroll)

  const fetchHandler = () => {
    setSplitUsers((prevState) => prevState + USER_PER_PAGE)
    dispatch(fetchUsers(splitUsers)).finally(dispatch(scrolling(false)))
  }
  console.log(filteredUsers)
  useEffect(() => {
    if (scrol && users.length < totalCount) {
      fetchHandler()
    }
  }, [scrol])

  return (
    <>
      <ul className="user-list" >
        <NewUser person={newUser} />
        { filteredUsers.length > 0?
          (filteredUsers).map((user, index) => {
            return (
              <User key={index} currentUser={user} />
            )
          })
        :
        (users).map((user, index) => {
          return (
            <User key={index} currentUser={user} />
          )
        })
        }
        
      </ul>
    </>
  )
}

export default UsersList


// const months = [{'a':'b'}, {'b':'c'}, {'c':'d'}];
// months.splice(1, 0, {'H':'F'});
// month