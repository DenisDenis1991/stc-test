import { useEffect, useState } from "react";
import UsersList from "../../components/users-list/users-list";
import axios from "axios";
import Modal from "../../components/modal/modal";
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from "../../store/api-action";
import { scrolling } from '../../store/data/data.slice'
import { store } from "../../store";
import debounce from "../../utils/utils";



const MainPage = () => {
  const dispatch = useDispatch()
  const [usersa, setUsers] = useState([])
  const [currentUsers, setCurrentUsers] = useState(0)
  const [fetching, setFetching] = useState(true)
  const [totalCountUSers, settotalCountUSers] = useState(0)
  const [modalActive, setModalActive] = useState(true)

  const count = useSelector((state) => state.reducer.users)
  const loading = useSelector((state) => state.reducer.isLoading)
  const totalCount = useSelector((state) => state.reducer.countUsers)

  const USER_PER_PAGE = 10;
  const scrol = useSelector((state) => state.reducer.scroll)
  const openModal = useSelector((state) => state.reducer.openModal)


  // useEffect(() => {
  //   if (fetching && count.length <= totalCount) {
  //     setCurrentUsers((prevState) => {console.log('perviy nah'); return prevState + USER_PER_PAGE})
  //     dispatch(fetchUsers(currentUsers)).finally(dispatch(scrolling(false)))
  //   }
  // }, [scrol])
  
  useEffect(() => {
    document.addEventListener('scroll', debounce(scrollHandler,500))
    dispatch(fetchUsers(0)).finally(dispatch(scrolling(false)))
    
    return function() {
      document.body.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 20) {
      console.log('scroll')
      dispatch(scrolling(true))
      
    }
  }

  return (
    <main>
      {/* { loading === false?  */}
        <>
          <button>asddsadsa</button>
          <button onClick={() => setModalActive(true)}>Добавить пользователя</button>
          <div className="container">
            <UsersList /*users={count|| []}*/ />
          </div>
      {/* : null
      } */}
      {openModal?
        <Modal />
        : null
      }
      </>
    </main>
  )
}

export default MainPage