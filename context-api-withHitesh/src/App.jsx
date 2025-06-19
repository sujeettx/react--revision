
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'
const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}

export default App
