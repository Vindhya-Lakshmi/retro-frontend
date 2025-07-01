
import React,{useState} from 'react'
const Login =() => {
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();

    function handleLogin(e){
        e.preventDefault();
        alert("Login Sucessfully")
    }

return (

            <div className='w-[100%] h-[100vh] flex justify-center items-center bg-slate-500'>
        <div className='w-[30%] h-[80vh] rounded-lg bg-white p-[10px] flex flex-col justify-center items-center'>
            <h1 className='text-[2rem] font-medium'>Log In</h1>
            <p className='text-[#646464]'>Lorem ipsum  consectetur adipisicing elit.</p>
                <form onSubmit={handleLogin} className='w-[100%] my-2' action="">
                     <input required value={email} onChange={(e)=>setEmail(e.target.value)} className='w-[100%] mb-1 h-[40px]  border-[#646464] border-[2px]  rounded-xl border-solid pl-[15px] ' placeholder='Enter your email'  type='email'/>
                      <input required value={password} onChange={(e)=>setPassword(e.target.value)} className=' w-[100%]  mb-2 h-[40px] border-[#646464] border-[2px]  rounded-xl border-solid pl-[15px] ' placeholder='Enter your password' type='password'/>
                      <button className='w-[100%] py-[8px] rounded-lg bg-green-500'>Log In</button>

                </form>
        </div>

    </div>


)

}
export default Login
