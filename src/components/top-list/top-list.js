import './style.scss'
import { useDispatch } from 'react-redux'
import { setOpenMenu } from '../../store/data/data.slice'


const TopList = () => {
  const dispatch = useDispatch()

  const handleOpenMenu = () => {
    dispatch(setOpenMenu(true))
  }
  return(
    <div className='top-nav'>
      <div className='container'>

        <ul className="top-nav __list top-list">
          <li className="top-list__item">
            <div className='top-nav__img' onClick={() => handleOpenMenu()}>
              <svg width="36" height="36" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7C5.06087 7 6.07828 7.42143 6.82843 8.17157C7.57857 8.92172 8 9.93913 8 11C8 12.0609 7.57857 13.0783 6.82843 13.8284C6.07828 14.5786 5.06087 15 4 15C2.93913 15 1.92172 14.5786 1.17157 13.8284C0.421427 13.0783 0 12.0609 0 11C0 9.93913 0.421427 8.92172 1.17157 8.17157C1.92172 7.42143 2.93913 7 4 7ZM11 0C12.0609 0 13.0783 0.421427 13.8284 1.17157C14.5786 1.92172 15 2.93913 15 4C15 5.06087 14.5786 6.07828 13.8284 6.82843C13.0783 7.57857 12.0609 8 11 8C9.93913 8 8.92172 7.57857 8.17157 6.82843C7.42143 6.07828 7 5.06087 7 4C7 2.93913 7.42143 1.92172 8.17157 1.17157C8.92172 0.421427 9.93913 0 11 0ZM11 14C12.0609 14 13.0783 14.4214 13.8284 15.1716C14.5786 15.9217 15 16.9391 15 18C15 19.0609 14.5786 20.0783 13.8284 20.8284C13.0783 21.5786 12.0609 22 11 22C9.93913 22 8.92172 21.5786 8.17157 20.8284C7.42143 20.0783 7 19.0609 7 18C7 16.9391 7.42143 15.9217 8.17157 15.1716C8.92172 14.4214 9.93913 14 11 14ZM18 7C19.0609 7 20.0783 7.42143 20.8284 8.17157C21.5786 8.92172 22 9.93913 22 11C22 12.0609 21.5786 13.0783 20.8284 13.8284C20.0783 14.5786 19.0609 15 18 15C16.9391 15 15.9217 14.5786 15.1716 13.8284C14.4214 13.0783 14 12.0609 14 11C14 9.93913 14.4214 8.92172 15.1716 8.17157C15.9217 7.42143 16.9391 7 18 7Z" fill="#283B69"/>
              </svg>
            </div>
          </li>
          <li className="top-list__item">
            <span>Имя</span>
          </li>
          <li className="top-list__item">
            <span>Телефон</span>
          </li>
          <li className="top-list__item">
            <span>Адрес</span>
          </li>
          <li className="top-list__item">
            <span>Электронная почта</span>
          </li>
        </ul>
      </div>  
    </div>
  )
}
export default TopList