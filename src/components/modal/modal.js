import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './style.scss';
import { addNewUser, setOpenModal, setCurrentId } from '../../store/data/data.slice';

const Modal = () => {
  const [hidden, setHidden] = useState(false)
  const currentUser = useSelector((state) => state.reducer.users[state.reducer.currentId-1])
  const currentId = useSelector((state) => state.reducer.currentId)
  const [inputValue, setInputValue] = useState({})
    
  const openModal = useSelector((state) => state.reducer.openModal)
  
  useEffect(() => {
    if (currentId) {
      return(
        setInputValue({
          name: currentUser?.firstName || '',
          number: currentUser?.phone || '',
          email: currentUser?.email || '',
          address: currentUser?.address.address||'',
        })
      )
    } 
    else {
      // return (
      //   setInputValue({
      //     name:'',
      //     number:'',
      //     email:'',
      //     address:'',
      //   })
      // )
      return () => {
        dispatch(setCurrentId(null))
      }
    }
      // currentUser = null
      // setInputValue({
      //   name: '',
      //   number: '',
      //   email: '',
      //   address: '',
      // })
    
  },[currentId])

  const dispatch = useDispatch()
  const heading = useSelector((state) => state.reducer.heading)

  
  const inputChange = (evt) => {
    const {name, value} = evt.target
    setInputValue({...inputValue, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewUser(inputValue))
    dispatch(setOpenModal(false))
    dispatch(setCurrentId(null))
  }

  const handleCloseModal = () => {
    dispatch(setOpenModal(false))
    dispatch(setCurrentId(null))
  }

  return (
    <div className={openModal? 'modal': 'modal notActive'} onClick={() => handleCloseModal()}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <h2>{heading? 'Редактировать пользователя': 'Добавить пользователя'}</h2>
        <form onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="name">Имя</label>
          <input
            className=''
            required
            name='name'
            id='name'
            placeholder='Имя'
            value= {inputValue.name}
            type='text'
            onChange={inputChange}
          />
          <label className="visually-hidden" htmlFor="number">Номер</label>
          <input
            className=''
            required
            id='number'
            name='number'
            placeholder='Номер'
            type='text'
            value= {inputValue.number}
            onChange={inputChange}
          />
          <label className="visually-hidden" htmlFor="email">Электронная почта</label>
          <input
            required
            className=''
            name='email'
            id='email'
            placeholder='Электронная почта'
            type='email'
            value= {inputValue.email}
            onChange={inputChange}
          />
          <label className="visually-hidden" htmlFor="address">Адрес</label>
          <input
            required
            className=''
            name='address'
            id='address'
            placeholder='Адрес'
            value= {inputValue.address}
            type='text'
            onChange={inputChange}
          />
          <button className="form__button" type="submit">Сохранить</button>
          <button className='form__button' type='reset'>Отмена</button>
        </form>

      </div>
    </div>
  )
}

export default Modal