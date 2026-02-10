
import { singin } from '../apiservice/auth/signin'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        try {
            const data = {
                email,
                password
            };

            const response = await singin(data);


            if (response?.status === 200) {
                const token = response?.data?.data?.response?.authToken;

                sessionStorage.setItem("token", token);
                localStorage.setItem("token", token);

                navigate("/dashboard");
            }

        } catch (error) {
            console.log(error);

        }
    };


    return (
        <div className='flex h-screen '>{/*left box*/}
            <div className='  w-1/2 h-[93% ] rounded-4xl  bg-black flex justify-center items-center m-7' >
                <img src='/apg.png' className='bg-black p-8  ' alt="none" />
              </div>

            <div className=' bg-gray-100 h-[93%] rounded-4xl  my-7 w-1/2 ' >  {/*right box*/}

                <div>
                    <div className='flex flex-col  font-semibold mt-10 p-14  ' >
                        <h3 className='text-4xl p-2 text-center ' >Admin-Panel</h3>
                        <h3 className='text-4xl p-2 text-center ' >Login</h3>
                        <div>
                            <form onSubmit={handleLogin} action="" className='p-4'  >
                                <div className='flex flex-col gap-2 p-2 ' >
                                    <label htmlFor="Email">Email</label>
                                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className='border-gray-200 border-4  p-4 rounded-2xl ' name="" placeholder='Enter your email ' id="" />
                                </div>
                                <div className='flex flex-col gap-2 p-2 ' >
                                    <label htmlFor="Password"  >Password</label>
                                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="Password" className='border-gray-200 text-2xl border-4  p-2 rounded-2xl ' name="" placeholder='Enter your password ' id="" />
                                </div>
                                <div className='bg-black rounded-xl m-6 text-center shadow-black shadow-2xl p-2' >
                                    <button className='text-white p-1.5 w-full hover:opacity-85 '  >Login</button>
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
