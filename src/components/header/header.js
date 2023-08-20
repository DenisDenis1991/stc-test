import TopList from '../top-list/top-list'
import {useDispatch} from 'react-redux'
import { setOpenModal } from '../../store/data/data.slice';


import './style.scss'
const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className="header">
      <div className="container">
        <div className='header__box'>
          <input type="text" className='header__input' placeholder='Поиск' />
          <button type='button' onClick={()=> dispatch(setOpenModal(true))}>Добавить пользователя</button>
        </div>

      </div>
      <TopList />
    </header>
  )
}

export default Header