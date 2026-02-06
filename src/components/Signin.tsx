
import { singin } from '../apiservice/auth/signin'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate=useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleLogin = async (e) => {
        
        e.preventDefault()

        const data = {
            email: email,
            password: password
        }
        const response = await singin(data)


        if (response.status === 200) {
            sessionStorage.setItem("token", response?.data?.data?.response?.authToken);
            localStorage.setItem("token", response?.data?.data?.response?.authToken)
        
            navigate("/dashboard");

        }
    }

    return (
        <div className='flex h-screen '>{/*left box*/}
            <div className='  w-1/2 h-[93% ] rounded-4xl  bg-black flex justify-center items-center m-7' >
                <img src="./apg.png" className='bg-black p-8 h- ' alt="none" />


            </div>

            <div className=' bg-gray-100 h-[93%] rounded-4xl p-12 my-7 w-1/2 ' >  {/*right box*/}

                <div>
                    <div className='flex flex-col  font-semibold mt-30  ' >
                        <h3 className='text-4xl p-2 text-center ' >Admin-Panel</h3>
                        <h3 className='text-4xl p-2 text-center ' >Login</h3>
                        <div>
                            <form action="" className='p-4'  >
                                <div className='flex flex-col gap-2 p-2 ' >
                                    <label htmlFor="Email">Email</label>
                                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className='border-gray-200 border-4  p-4 rounded-2xl ' name="" placeholder='Enter your email ' id="" />
                                </div>
                                <div className='flex flex-col gap-2 p-2 ' >
                                    <label htmlFor="Password"  >Password</label>
                                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="Password" className='border-gray-200 text-2xl border-4  p-2 rounded-2xl ' name="" placeholder='Enter your password ' id="" />
                                </div>
                                <div className='bg-black rounded-xl m-6 text-center shadow-black shadow-2xl p-2' >
                                    <button className='text-white p-1.5 w-full hover:opacity-85 ' onClick={(e) => handleLogin(e)} >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
