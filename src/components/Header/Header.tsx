import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}


const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const navigate=useNavigate();

    const handlelogoutclick=()=>{
        localStorage.removeItem("token")
        sessionStorage.removeItem('token')
    

        navigate("/auth/signin")

    }
    

    const [logout, setlogout] = useState(false);
    return (
        <div className=' h-17 flex m-5 justify-between '>

            <div className='p-2 ml-30 ' >
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className='bg-white rounded-lg  ' ><IoReorderThreeOutline className='size-10  ' />
                </button>
            </div>



         {!sidebarOpen&&   <NavLink to={"/dasboard"}   >
                <img src="./apg.png" className='h-full  ' alt="" />
            </NavLink>
}


            <div>
                <div>

                </div>

                <div className='flex  poistion relative mr-20 gap-3.5 mx-6 ' >
                    <button onClick={() => setlogout(!logout)} className='mt-3 text-black  font-semibold  mr-5 text-3xl' >Admin</button>
                    <span onClick={() => setlogout(!logout)} className='mt-2  ' >
                        <img className='h-12 ' src={"./images copy/Defaultprofile.png"} alt="" />
                    </span>
                    <span onClick={() => setlogout(!logout)} className='mt-5   ml-5   ' >
                        <FaChevronDown className='size-5 outline-gray-50 ' />


                    </span>

                    {logout && <div className=' border-2 bg-gray-50 position absolute  hover:bg-gray-100   p-3 rounded-2xl shadow-lg shadow-black text-xl left-15 top-20 ' >
                       <button  onClick={handlelogoutclick} >Logout</button> 

                    </div>}


                </div>
            </div>
        </div>
    )
}

export default Header

