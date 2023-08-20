import { useEffect, useState } from "react"
import User from "../user/user"
import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from "../../store/api-action"
import { scrolling } from "../../store/data/data.slice"

const UsersList = () => {
  const dispatch = useDispatch();
  const USER_PER_PAGE = 10;
  const users = useSelector((state) => state.reducer.users)
  const [currentUsers, setcurrentUsers] = useState(USER_PER_PAGE);
  const newUser = useSelector((state) => state.reducer.newUser)
  const totalCount = useSelector((state) => state.reducer.countUsers)
  const scrol = useSelector((state) => state.reducer.scroll)

  useEffect(() => {
    if (scrol && users.length < totalCount) {

      setcurrentUsers((prevState) => prevState + USER_PER_PAGE)
      dispatch(fetchUsers(currentUsers)).finally(dispatch(scrolling(false)))
    }
  }, [scrol])

  return (
    <>
      <ul className="user-list" >
        {(users).map((user, index) => {
          return (
            <User key={index} currentUser={user} />
          )
        })}
        {newUser.length>0? 
          newUser.map(el => {
            return (
              <li key={currentUsers+newUser.lenght} className={currentUsers+newUser.lenght%2!==0? "user-list__item user-list__item--second":"user-list__item"}>
                <div className='user-list__img'>
                  {/* <img src={newUser?.image} /> */}
                </div>
                <p className="user-list__name">{el.name}</p>
                <a href={`tel: ${(el.number)}`}>{el.number}</a>
                <address>{el.address}</address>
                <a href={`mailto:${el.email}`}>{el.email}</a>
                <button type='button'>Редактировать</button>
              </li>
            )

          })
          : null
        }
        
      </ul>
    </>
  )
}

export default UsersList
