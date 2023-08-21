import TopList from '../top-list/top-list'
import {useDispatch} from 'react-redux'
import { setOpenModal, setCurrentId, setHeading } from '../../store/data/data.slice'


import './style.scss'
const Header = () => {
  const dispatch = useDispatch()
  const handlCorrect = (id) => {
    dispatch(setHeading(false))
    dispatch(setOpenModal(true))
  }
  
  return (
    <header className="header">
      <div className="container">
        <div className='header__box'>
          <input type="text" className='header__input' placeholder='Поиск' />
          <button type='button' onClick={() => handlCorrect()}>Добавить пользователя</button>
        </div>

      </div>
      <TopList />
    </header>
  )
}

export default Header