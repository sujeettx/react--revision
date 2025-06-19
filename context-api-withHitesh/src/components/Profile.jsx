import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
  const { User } = useContext(UserContext) 

  if (!User) return <h1>Please login</h1>

  return (
    <h1 className="text-center mt-4 text-2xl font-semibold text-gray-800">
      Welcome : {User.username}
    </h1>
  )
}

export default Profile
