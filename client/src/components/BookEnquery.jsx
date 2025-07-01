import React from 'react'

const BookEnquery = () => {
  return (
    <div className='w-[100%] min-h-[88vh] h-auto p-[30px]'>
      <h1 className='text-[1.5rem] font-medium'>Book Enquery</h1>
      <div className='w-[50%] min-h-[160px] flex items-center h-auto p-[10px] rounded-lg bg-slate-100 my-2'>
        <div className='w-[150px] h-[150px] rounded-lg bg-slate-200'>
        </div>
        <div className='h-[100%] p-[15px]'>
          <h1 className='mt-1 text-[1.3rem]'>Residential Land, Wayanad</h1>
          <p>Kollam,Madathara</p>
          <p className='text-green-600 text-[1.2rem]'> ₹20-25 lakhs</p>
        </div>
      </div>
      <div className='mt-2'>
        <h1 className='text-[1.5rem] font-medium'>Book Enquery</h1>
                <form action="">
            <div className='flex flex-col'>
            <label className="font-medium" htmlFor=''>Name</label>
            <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type="text" />
            </div>
                        <div className='flex flex-col'>
            <label className="font-medium" htmlFor=''>Phone</label>
            <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type="text" />
            </div>
                        <div className='flex flex-col'>
            <label className="font-medium" htmlFor=''>Email</label>
            <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type="text" />
            </div>
                        <div className='flex flex-col'>
            <label className="font-medium" htmlFor=''>Address</label>
            <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type="text" />
            </div>
            <button className='w-[40%] h-[40px] text-center bg-green-500 mt-2 rounded-lg'>Book Enquery</button>
        </form>
      </div>

    </div>
  )
}
export default BookEnquery