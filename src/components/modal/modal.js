import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './style.scss';
import { addNewUser, setOpenModal, setCurrentId, editUser, setImage } from '../../store/data/data.slice';
import input from '../../content/input.svg'

const Modal = () => {
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [inputValue, setInputValue] = useState({})
  const currentId = useSelector((state) => state.reducer.currentId)

  const countUsers = useSelector((state) => state.reducer.countUsers)
  const currentUser = useSelector((state) => state.reducer.users[currentId-1])
  const newUser = useSelector((state) => state.reducer.newUser[currentId-countUsers-1])
  const openModal = useSelector((state) => state.reducer.openModal)
  const modalFlag = useSelector((state) => state.reducer.modalFlag)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    if (modalFlag && currentId < countUsers) {
      return(
        setInputValue({
          name: (currentUser.firstName)? `${currentUser?.firstName} ${currentUser?.lastName}` : currentUser.name,
          phone: currentUser?.phone || '',
          email: currentUser?.email || '',
          address: currentUser.address.address || currentUser.address,      
        })
      )
    } 
    else {
      return (
        setInputValue({
          name: (newUser)? newUser.name : '',
          phone: (newUser)? newUser.phone : '',
          email: (newUser)? newUser.email : '',
          address: (newUser)? newUser.address : '',
        })
      ) 
    }
  },[modalFlag, currentId])

  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setOpenModal(false))
    dispatch(setCurrentId(null))

    if (!modalFlag) {
      dispatch(addNewUser(inputValue, inputValue.src = imageUrl))
    } else {
      dispatch(editUser(debouncedInputValue, debouncedInputValue.id = currentId, debouncedInputValue.src = imageUrl))
    }
  }

  const handleCloseModal = () => {
    dispatch(setOpenModal(false))
    dispatch(setCurrentId(null))
  }
  
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setInputValue({...inputValue, [name]: value});
  };
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);
  


    const [image, setImage] =useState()
    const [imageUrl, setImageUrl] = useState(input)

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      setImageUrl(fileReader.result)
    }

    const handleOnLoad = (evt) => {
      const file = evt.target.files[0]
      setImage(file)
      fileReader.readAsDataURL(file)
    } 

  return (
    <div className={openModal? 'modal': 'modal notActive'} onClick={() => handleCloseModal()}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <h2>{modalFlag? 'Редактировать пользователя': 'Добавить пользователя'}</h2>
        <form className='modal__form form' onSubmit={handleSubmit}>
          <label className='form__input-photo'  htmlFor="avatar">
              <img src={imageUrl} alt='аватар'></img>  
          </label>
          <input 
            className='visually-hidden'
            onChange={handleOnLoad}
            type="file" 
            id="avatar" 
            name="avatar" 
            accept="image/png, image/jpeg" 
          />
          <label className="visually-hidden" htmlFor="name">Имя</label>
          <input
            required
            className='form__input'
            name='name'
            id='name'
            placeholder='Имя'
            value= {inputValue.name || ''}
            type='text'
            onChange={(handleInputChange)}
          />
          <label className="visually-hidden" htmlFor="phone">Номер</label>
          <input
            required
            className='form__input'
            id='phone'
            name='phone'
            placeholder='Номер'
            type='text'
            value= {inputValue.phone || ''}
            onChange={handleInputChange}
          />
          <label className="visually-hidden" htmlFor="email">Электронная почта</label>
          <input
            required
            className='form__input'
            name='email'
            id='email'
            placeholder='Электронная почта'
            type='email'
            value= {inputValue.email || ''}
            onChange={handleInputChange}
          />
          <label className="visually-hidden" htmlFor="address">Адрес</label>
          <input
            required
            className='form__input'
            name='address'
            id='address'
            placeholder='Адрес'
            value= {inputValue.address || ''}
            type='text'
            onChange={handleInputChange}
          />
          <div className='form__button-box'>
            <button className="form__button" type="submit">Сохранить</button>
            <button className='form__button' type='reset'>Отмена</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Modal
