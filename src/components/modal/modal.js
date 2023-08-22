import { useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './style.scss';
import { addNewUser, setOpenModal, setCurrentId, editUser, setImage } from '../../store/data/data.slice';


const Modal = () => {
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [inputValue, setInputValue] = useState({})
  const currentId = useSelector((state) => state.reducer.currentId)

  const countUsers = useSelector((state) => state.reducer.countUsers)
  const currentUser = useSelector((state) => state.reducer.users[currentId-1])
  const newUser = useSelector((state) => state.reducer.newUser[currentId-countUsers-1])
  const openModal = useSelector((state) => state.reducer.openModal)
  console.log(newUser)
  
  useEffect(() => {
    if (currentUser) {
      
    }
  })

  useEffect(() => {
    console.log('inputValue', inputValue)
    if (currentId) {
      return(
        setInputValue({
          name: `${currentUser?.firstName} ${currentUser?.lastName}` || newUser.name,
          phone: currentUser?.phone|| newUser.phone,
          email: currentUser?.email|| newUser.email,
          address: currentUser.address.address || newUser.address || currentUser.address,
          // photo: currentUser.image
        })
      )
    } 
    else {
      return (
        setInputValue({
          name: '',
          phone: '',
          email: '',
          address: '',
          // photo: currentUser.image
        })
      ) 
      // ()=> {
      //   dispatch(setCurrentId(null))
      // }
    }
  },[currentId])

  
  const dispatch = useDispatch()
  const heading = useSelector((state) => state.reducer.heading)
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setOpenModal(false))
    dispatch(setCurrentId(null))
    // handleOnLoad()
    // dispatch(setImage(    fileReader.onloadend = () => {
    //   setImageUrl(fileReader.result)
    // }))
    if (!heading) {
      dispatch(addNewUser(inputValue))
    } else {
      dispatch(editUser(debouncedInputValue, debouncedInputValue.id = currentId))
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
  

    const fileLoader = useRef();
    const handleLoad =() => {
      console.log(fileLoader.current.files[0])
    }

    const [image, setImage] =useState()
    const [imageUrl, setImageUrl] = useState()

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      setImageUrl(fileReader.result)
    }

    const handleOnLoad = (evt) => {
      console.log(evt.target)
    } 

  return (
    <div className={openModal? 'modal': 'modal notActive'} onClick={() => handleCloseModal()}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <h2>{heading? 'Редактировать пользователя': 'Добавить пользователя'}</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor="avatar">Choose a profile picture:</label>

          <input 
            // ref={fileLoader} 
            onChange={handleOnLoad}
            type="file" 
            id="avatar" 
            name="avatar" 
            accept="image/png, image/jpeg" 
          />
          <label className="visually-hidden" htmlFor="name">Имя</label>
          <input
            className=''
            required
            name='name'
            id='name'
            placeholder='Имя'
            value= {inputValue.name || ''}
            type='text'
            onChange={(handleInputChange)}
          />
          <label className="visually-hidden" htmlFor="number">Номер</label>
          <input
            className=''
            required
            id='number'
            name='phone'
            placeholder='Номер'
            type='text'
            value= {inputValue.phone || ''}
            onChange={handleInputChange}
          />
          <label className="visually-hidden" htmlFor="email">Электронная почта</label>
          <input
            required
            className=''
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
            className=''
            ref={fileLoader}
            name='address'
            id='address'
            placeholder='Адрес'
            value= {(inputValue.address)? '22' : '11'}
            type='text'
            onChange={handleInputChange}
          />
          <button className="form__button" type="submit">Сохранить</button>
          <button className='form__button' type='reset'>Отмена</button>
        </form>

      </div>
    </div>
  )
}

export default Modal
