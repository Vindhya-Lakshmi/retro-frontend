import React from 'react'

const Main = () => {
    return (
        <div className='w-[100%] h-[88vh] bg-slate-200 flex flex-col justify-center px-[50px]'>
            <h1 className='text-[3rem]'>Welcome To The World 
                <br/>Of Real Estate</h1>
                <p className='w-[50%]  ' >     Real estate, in general, refers to land and any buildings or 
                    improvements permanently attached to it, including natural resources like water or
                     minerals. It encompasses the physical property itself and the legal rights
                      associate with ownership, use, and enjoyment of that property.
                </p>
                <div className="flex gap-2 w-[40%] mt-2">
                    <input type="text"placeholder='Search your property' className='h=[40px] pl-[15px] rounded-lg w-[80%] bg-white border-none outline-none' name="" id=""></input>
                    <button className='px-[8px] h-[45px] rounded-lg bg-green-400'>Search</button>
                </div>
        
    </div>
  )
}
export default  Main;
