import {useDispatch, useSelector} from 'react-redux'
import { setCurrentId, setModalFlag, setOpenModal } from "../../store/data/data.slice"
import './style.scss'

const NewUser = (person) => {
  const personId = useSelector((state) => state.reducer.countUsers)
  const dispatch = useDispatch()
  const handlCorrect = (id) => {
    dispatch(setCurrentId(id))
    dispatch(setModalFlag(true))
    dispatch(setOpenModal(true))
  }


  return (
      person.person.map((el, index) => {
        console.log(el)
        return (
          <li key={personId + index + 1} className={(personId + index + 1)%2!==0? "user-list__item user-list__item--second":"user-list__item"}>
            <div className='user-list__img'>
              <img src={el.src} alt='avatar'></img>
            </div>
            <p className="user-list__name">{el.name}</p>
            <a href={`tel: ${(el.phone)}`}>{el.phone}</a>
            <address>{el.address}</address>
            <a href={`mailto:${el.email}`}>{el.email}</a>
            <button id={personId + index + 1} onClick={() => handlCorrect(personId + index + 1)} type='button'>Редактировать</button>
          </li>
        )

      })
  )
}

export default NewUser