
import { useEffect, useState, type ReactNode } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import { useNavigate } from 'react-router-dom'


const Defaultlayout:React.FC<{ children: ReactNode }> = ({children}) => {

    const [Sidebaropen, setSidebaropen] = useState(false)

    const navigate=useNavigate()


     useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && location.pathname !== "/auth/signin") {
      navigate("/auth/signin");
    }
    console.log("sdfsdb");
  }, [navigate, location.pathname]);
  


    return (
        <div>

            <Sidebar sidebarOpen={Sidebaropen} setSidebarOpen={setSidebaropen} />
            <Header  sidebarOpen={Sidebaropen} setSidebarOpen={setSidebaropen}  />
             <div  className={` transition-all duration-300 ease-in-out    ${Sidebaropen
               ? "pl-60" : "pl-17"}`}> {children  }</div>


        </div>
    )
}

export default Defaultlayout
