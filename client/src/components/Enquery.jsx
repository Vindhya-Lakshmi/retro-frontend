import React from 'react'

const Enquery = () => {
    return (
        <div className='w-[100%] h-[88vh] p-[30px]'>
            <h1 className="text-[1.5rem] font-medium"> My Enuery</h1>
            <div className=''>
                <div className='w-[50%] min-h-[160px] flex items-center h-auto p-[10px] rounded-lg bg-slate-100'>
                    <div className='w-[80%] min-h-[160px] flex items-center h-auto p-[10px] rounded-lg bg-slate-100 my-2'>
                        <div className='w-[150px] h-[150px] rounded-lg bg-slate-200'>
                        </div>
                        <div className='h-[100%] p-[15px]'>
                            <h1 className='mt-1 text-[1.3rem] font-medium'>Residential Land, Wayanad</h1>
                            <p>Kollam,Madathara</p>
                            <p className='text-green-600 text-[1.2rem]'> ₹20-25 lakhs</p>
                            <p className='text-[1.1rem]'><span className='font-semibold'>Status</span>--Pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Enquery