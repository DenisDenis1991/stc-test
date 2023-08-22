import { setOpenModal, setCurrentId, setModalFlag } from '../../store/data/data.slice'
import './style.scss'
import {useDispatch} from 'react-redux'

const User = ({currentUser}) => {
  const dispatch = useDispatch()
  
  const handlCorrect = (id) => {
    dispatch(setCurrentId(id))
    dispatch(setModalFlag(true))
    dispatch(setOpenModal(true))
  }


  return (
    <li className={currentUser.id%2===0? "user-list__item user-list__item--second":"user-list__item"}>
      <div className='user-list__img'>
        <img src={(currentUser.src)? currentUser.src : currentUser.image} alt='avatar' />
      </div>
      <p className="user-list__name">{currentUser.firstName || currentUser.name} {currentUser.lastName|| ''}</p>
      <a href={`tel: ${(currentUser.phone)}`}>{currentUser.phone}</a>
      <address>        
        {currentUser.address.address? `${currentUser.address.address} ${currentUser.address.city}` : currentUser.address}
      </address>
      <a href={`mailto:${currentUser.email}`}>{currentUser.email}</a>
      <button id={currentUser.id} type='button' onClick={() => handlCorrect(currentUser.id)}>Редактировать</button>
    </li>
  )
}

export default User
