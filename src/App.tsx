
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Signin from './components/Signin'
import Dashboard from './Pages/Dashboard/Dashboard'
import  Defaultlayout  from './Layout/Defaultlayout'
import Userlist from './Pages/User/Userlist'

function App() {

  const { pathname } = useLocation()
  const isAuthRoute = pathname.startsWith("/auth")

  return (


    isAuthRoute ? (
    <Routes>
      <Route path="/auth/signin" element={<Signin />} />
    </Routes>
    ): 
    (


      <Defaultlayout>
        <Routes>
          
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user'  element={<Userlist/>}  />


        </Routes>

      </Defaultlayout>
    )

    



  )

}

export default App
