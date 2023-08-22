import { useEffect } from "react";
import UsersList from "../../components/users-list/users-list";
import Modal from "../../components/modal/modal";
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from "../../store/api-action";
import { scrolling } from '../../store/data/data.slice'
import debounce from "../../utils/utils";
import ModalMenu from "../../components/modal-menu/modal-menu";



const MainPage = () => {
  const dispatch = useDispatch()
  const openModal = useSelector((state) => state.reducer.openModal)
  const error = useSelector((state) => state.reducer.error)

  useEffect(() => {
    document.addEventListener('scroll', debounce(scrollHandler,500))
    dispatch(fetchUsers(0)).finally(dispatch(scrolling(false)))
    
    return function() {
      document.body.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 20) {
      dispatch(scrolling(true))
    }
  }

  return (
    <main>
        {error? 
          <h2 className="error">Перезагрузите страницу</h2>
          :
          <>
            <ModalMenu />
            <div className="container">
              <UsersList />
            </div>       
          </>
        }
          {openModal?
            <Modal />
          : null
          }

    </main>
  )
}

export default MainPage