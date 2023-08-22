import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import { setOpenModal, setOpenMenu } from '../../store/data/data.slice'

const ModalMenu = () => {
  const dispatch = useDispatch()
  const openMenu = useSelector((state) => state.reducer.openMenu)
  
  const handleCloseModal = () => {
    dispatch(setOpenModal(true))
    dispatch(setOpenMenu(false))
  }

  const handleCloseMenu = () => {
    dispatch(setOpenMenu(false))
  }

  return (
    <div className={openMenu? 'select': 'notActive'} onClick={() => handleCloseMenu()}>
      <div className='select__box' onClick={(e) => e.stopPropagation()}>
        <div className='select__content'>
          <button className='select__button-import' disabled>
            <svg width="40" height="36" viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.68 18L7.84 27.84L5 25L10 20H0V16H10L5 11L7.84 8.16L17.68 18ZM24 0C17.18 0 11.36 2.14 9.06 5.14L10 6L12.06 8.14C12 8.1 12 8 12 8C12 7 16.26 4 24 4C31.74 4 36 7 36 8C36 9 31.74 12 24 12C18.76 12 15.16 10.62 13.36 9.44L19.6 15.68C21 15.88 22.48 16 24 16C28.78 16 33.06 14.94 36 13.28V18.9C33.4 20.8 28.84 22 24 22C22.08 22 20.2 21.8 18.48 21.46L15.18 24.74C17.82 25.54 20.82 26 24 26C28.56 26 32.78 25.1 36 23.54V28C36 29 31.74 32 24 32C16.26 32 12 29 12 28V27.92L10 30L9.08 30.86C11.38 33.86 17.2 36 24 36C32.82 36 40 32.42 40 28V8C40 3.58 32.84 0 24 0Z" />
            </svg>
            <span>Импортировать контакты</span>
          </button>
          <button className='select__button-export' disabled>
            <svg width="40" height="36" viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.72 30L29.8 32C27 34.4 21.88 36 16 36C7.18 36 0 32.42 0 28V8C0 3.58 7.16 0 16 0C21.9 0 27 1.6 29.8 4L27.72 6L27 6.8C25.3 5.54 21.56 4 16 4C8.26 4 4 7 4 8C4 9 8.26 12 16 12C18.74 12 21 11.62 22.84 11.08L24.76 13H19V15.84C18 15.94 17 16 16 16C11.22 16 6.94 14.94 4 13.28V18.9C6.6 20.8 11.16 22 16 22C17 22 18 21.94 19 21.84V23H24.76L22.76 25L23 25.22C20.82 25.72 18.48 26 16 26C11.44 26 7.22 25.1 4 23.54V28C4 29 8.26 32 16 32C21.56 32 25.3 30.46 27 29.22L27.72 30ZM29.84 8.16L27 11L32 16H22V20H32L27 25L29.84 27.84L39.68 18L29.84 8.16Z"/>
            </svg>
            <span>Экспортировать контакты</span>
          </button>
          <button onClick={() => handleCloseModal()} className='select__button-user'>
            <svg width="38" height="28" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.9998 17.3334C19.5498 17.3334 10.6665 19.5501 10.6665 24.0001V27.3334H37.3332V24.0001C37.3332 19.5501 28.4498 17.3334 23.9998 17.3334ZM8.99984 10.6667V5.66675H5.6665V10.6667H0.666504V14.0001H5.6665V19.0001H8.99984V14.0001H13.9998V10.6667H8.99984ZM23.9998 14.0001C25.7679 14.0001 27.4636 13.2977 28.7139 12.0475C29.9641 10.7972 30.6665 9.10153 30.6665 7.33342C30.6665 5.5653 29.9641 3.86961 28.7139 2.61937C27.4636 1.36913 25.7679 0.666748 23.9998 0.666748C22.2317 0.666748 20.536 1.36913 19.2858 2.61937C18.0355 3.86961 17.3332 5.5653 17.3332 7.33342C17.3332 9.10153 18.0355 10.7972 19.2858 12.0475C20.536 13.2977 22.2317 14.0001 23.9998 14.0001Z"/>
            </svg>
            <span>
              Добавить пользователя
            </span>
          </button>
          <button 
            className='select__button-edit'
          >
            <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.5167 7.73335C30.1667 7.08335 30.1667 6.00002 29.5167 5.38335L25.6167 1.48335C25 0.83335 23.9167 0.83335 23.2667 1.48335L20.2 4.53335L26.45 10.7833L29.5167 7.73335ZM0 24.75V31H6.25L24.6833 12.55L18.4333 6.30002L0 24.75Z"/>
            </svg>
            <span>Редактировать список</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalMenu