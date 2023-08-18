import photo from '../../content/photo.png'

const User = (currentUser) => {
  const {currentUser:user} = currentUser
  console.log(user)
  return (
    <li className="user-list__item">
      <img src={photo} />
      <p className="user-list__name">{user.name}</p>
      <a href={`tel: ${((user.phone).split(' ')[0])}`}>{user.phone}</a>
      <address>{user.address?.city} {user.address?.street} {user.address?.suite}</address>
      <a href={`mailto:${user.email}`}>{user.email}</a>
      <button type='button'>Редактировать</button>
    </li>
  )
}

export default User
