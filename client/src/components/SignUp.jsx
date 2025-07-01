import React,{useState} from 'react'

const SignUp = () => {

    let [formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
    })

    function handleChange(e){
        setFormData(prev => ({...prev,[e.target.name]: e.target.value}))
    }
    function handleSignUp(e){
        e.preventDefault();
        console.log(formData);
        alert("Signup Successfully")
    }
  return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center bg-slate-500'>
        <div className='w-[30%] h-[80vh] rounded-lg bg-white p-[10px] flex flex-col justify-center items-center'>
            <h1 className='text-[2rem] font-medium'>Sign Up</h1>
            <p className='text-[#646464]'>Lorem ipsum  consectetur adipisicing elit.</p>
                <form onSubmit={handleSignUp} className='w-[100%] my-2' action="">
                    <input required value={formData.username} onChange={handleChange} className=' w-[100%] mb-2 h-[40px] border-[#646464] border-[2px] rounded-xl border-solid pl-[15px] ' placeholder='Enter your Name' name='username' type='text'/>
                     <input  required value={formData.email} onChange={handleChange} className='w-[100%] mb-1 h-[40px]  border-[#646464] border-[2px]  rounded-xl border-solid pl-[15px] ' placeholder='Enter your email' name='email'  type='email'/>
                      <input required value={formData.password} onChange={handleChange} className=' w-[100%]  mb-2 h-[40px] border-[#646464] border-[2px]  rounded-xl border-solid pl-[15px] ' placeholder='Enter your password' name='password' type='password'/>
                      <button className='w-[100%] py-[8px] rounded-lg bg-green-500'>Sign Up</button>

                </form>
        </div>

    </div>
    
  )
}

export default  SignUp
