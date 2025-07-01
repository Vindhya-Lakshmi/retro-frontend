import React from 'react'

const Account = () => {
  return (
    <div className='w-[100%]h-[80vh],p-[30px]'>
        <h1 className='text-[1.5rem] font-medium'>My Account</h1>
        <div className='w-[60%] p-[10px] rounded-lg mt-2 bg-slate-200'>
            <p className='text-[1.1rem]'><span className='font-medium'>Name</span> : Vindhya</p>
             <p className='text-[1.1rem]'><span className='font-medium'>Phone</span> : 8762876843</p>
              <p className='text-[1.1rem]'><span className='font-medium'>Email</span> : Vindhya123@gmail.com</p>
               <p className='text-[1.1rem]'><span className='font-medium'>Place</span> : Nilgiri</p>
               <p className='text-[1.1rem]'><span className='font-medium'>Address</span> : xxxx,xxxx,xxxxx</p>
        </div>
        <div className='flex gap-2'>
            <button className='px-[15px] py-[8px] rounded-lg text-white bg-green-500 mt-2'>Edit Account</button>
            <button className='px-[15px] py-[8px] rounded-lg text-white bg-blue-500 mt-2'>Enquery</button>
        </div>
    </div>

  )
}

export default Account
