import TopList from '../top-list/top-list'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { setOpenModal, setCurrentId, setHeading, filteredUsers } from '../../store/data/data.slice'
import './style.scss'

const inputSearch = (inputText, arr) => {
  if (!inputText) {
    return arr;
  }
  return arr.filter(({ firstName }) => firstName.toLowerCase().includes(inputText.toLowerCase()));
}

const Header = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const users = useSelector((state) => state.reducer.users)
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue)
      console.log('setDebouncedInputValue', debouncedInputValue)
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, 500]);
  
  let searchUsers = inputSearch(debouncedInputValue, users);
  
  useEffect(()=> {
    dispatch(filteredUsers(searchUsers))
  }, [searchUsers])

  const handleInputText = (evt) => {
    setInputValue(evt.target.value)
  }
  
  
  const handlCorrect = (id) => {
    dispatch(setHeading(false))
    dispatch(setOpenModal(true))
  }
  return (
    <header className="header">
      <div className="container">
        <div className='header__box'>
          <input onChange={handleInputText} type="text" className='header__input' placeholder='Поиск' />
          <button type='button' onClick={() => handlCorrect()}>Добавить пользователя</button>
        </div>

      </div>
      <TopList />
    </header>
  )
}

export default Header