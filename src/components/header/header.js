import TopList from '../top-list/top-list'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { setOpenModal, setSorting, setModalFlag, filteredUsers } from '../../store/data/data.slice'
import './style.scss'


const filterObjectsByValue = (inputText, arr) => 
  arr.filter(obj => {
    return Object.values(obj).some(val => {
      if (typeof val === 'string') {
        return val.toLowerCase().includes(inputText.toLowerCase());
      } else 
      if (typeof val === 'object') {
        return Object.values(val).some(innerVal => {
          return typeof innerVal === 'string' && innerVal.toLowerCase().includes(inputText.toLowerCase());
        });
      } else {
        return false;
      }
    });
  });

const Header = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const users = useSelector((state) => state.reducer.users)
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue)
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, 500]);
  
  let searchUsers = filterObjectsByValue(debouncedInputValue, users);
  
  useEffect(()=> {
    dispatch(filteredUsers(searchUsers))
  }, [searchUsers])

  const handleInputText = (evt) => {
    setInputValue(evt.target.value)
  }
  
  const handleSelect = (value) => {
    dispatch(setSorting(value))
  }
  
  const handlCorrect = (id) => {
    dispatch(setModalFlag(false))
    dispatch(setOpenModal(true))
  }
  return (
    <header className="header">
      <div className="container">
        <div className='header__box'>
          <input onChange={(e) => handleInputText(e)} type="text" className='header__input' placeholder='Поиск' />
        </div>
        <div>
          <button type='button' onClick={() => handlCorrect()}>Добавить пользователя</button>
          <select onChange={(e)=>{handleSelect(e.target.value)}}>Сортировка
          <option value="">-- Сортировка --</option>
            <option value='up'>По алфавиту</option>
            <option value='down'>Наоборот</option>
          </select>
        </div>
      </div>
      <TopList />
    </header>
  )
}

export default Header