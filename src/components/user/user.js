import { setOpenModal, setCurrentId, setHeading } from '../../store/data/data.slice'
import './style.scss'
import {useDispatch, useSelector} from 'react-redux'

const User = ({currentUser}) => {
  const dispatch = useDispatch()
  
  const handlCorrect = (id) => {
    dispatch(setCurrentId(id))
    dispatch(setHeading(true))
    dispatch(setOpenModal(true))
  }

  return (
    <li className={currentUser.id%2===0? "user-list__item user-list__item--second":"user-list__item"}>
      <div className='user-list__img'>
        <img src={currentUser.image} />
      </div>
      <p className="user-list__name">{currentUser.firstName} {currentUser.lastName}</p>
      <a href={`tel: ${(currentUser.phone)}`}>{currentUser.phone}</a>
      <address>{currentUser.address?.city} {currentUser.address?.address}</address>
      <a href={`mailto:${currentUser.email}`}>{currentUser.email}</a>
      <button id={currentUser.id} type='button' onClick={() => handlCorrect(currentUser.id)}>Редактировать</button>
    </li>
  )
}

export default User
