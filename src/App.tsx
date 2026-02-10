
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Signin from './components/Signin'
import Dashboard from './Pages/Dashboard/Dashboard'
import  Defaultlayout  from './Layout/Defaultlayout'
import Userlist from './Pages/User/Userlist'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Property from './Pages/Property/Property'
import { Toaster } from "react-hot-toast";
import Scheduletour from './Pages/Scheduletour/Scheduletour'

<Toaster position="top-center" />


function App() {
  const navigate=useNavigate();

  const { pathname } = useLocation()
  const isAuthRoute = pathname.startsWith("/auth")
  
   useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && location.pathname !== "/auth/signin") {
      navigate("/auth/signin");
    }
    console.log("sdfsdb");
  }, [navigate, location.pathname])

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
          <Route path='/property' element={<Property/> } />
          <Route path='/scheduletours' element={<Scheduletour/>} />
 

        </Routes>

      </Defaultlayout>
    )

    



  )

}

export default App
