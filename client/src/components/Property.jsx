import React from 'react'

const Property = () => {
    let tags = ["All", "Nilgiri", "Kochi", "Dubai"]

    return (
        <div className='w-[100%] bg-gray-100 px-[50px] min-h-[100vh] h-auto'>
            <h1 className="text-[2.2rem] font-medium">Our Property</h1>
            <div className='flex  my-2 gap-2'>
                {
                    tags.map((val,index) => {

                        return (<div key = {index} className='px-[10px] py-[5px] rounded-lg bg-slate-300'>
                            {val}
                        </div>)

                    })
                }
            </div>
            <div className="flex flex-wrap mt-4 gap-2 w-[100%] h-auto">
                <div className='bg-slate-300 p-[10px] rounded-sm w-[300px] '>
                    <div className='w-[100%] h-[170px] rounded-md bg-slate-100'></div>
                    <h1 className='mt-1 text-[1.3rem] font-medium'>Residential Land, Wayanad</h1>
                    <p>Kollam,Madathara</p>
                    <p className='text-[0.8rem] text-gray-800'>1.5 acre land with residential
                        house for sale location: Padichira,Pupally wayanad.</p>
                    <p className='text-green-600 text-[1.2rem]'> ₹20-25 lakhs</p>
                    <button className='w-[100%] py-[7px] rounded-md bg-green-400 mt-2'>Book Enquery</button>
                </div>
            </div>
        </div>
    )
}

export default Property