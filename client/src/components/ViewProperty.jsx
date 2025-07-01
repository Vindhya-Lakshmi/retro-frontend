import React from 'react'
import PropertyImg from "../../Assets/PropertyImg.jpg"
const ViewProperty = () => { 


return (
    <div className='w-[100%] min-h-[100vh]  flex h-auto p-[30px]'>
        <div className='w-[50%] h-[100%] flex justify-center items-center'>
            <img src={PropertyImg} className='rounded-lg' alt=''/>
        </div>
        <div className='w-[50%] pl-[15px] min-h-[80vh] h-[100%] flex justify-center  flex-col'>
            <h1 className='text-[2rem] font-semibold'>Residential land, Wayanad</h1>
            <div className='flex justify-between '>
                <p className='text-[1.3rem]'>Gudalur,Nilgiri</p>
                <p className='text-[1.3rem] text-green-500 font-medium'>20-25 lakh</p>
            </div>
            <p className='mt-2 text-wrap'> Lorem , ipsum dolor sit amet consectetur adipisicing elit.
                 A, illum voluptatibus. Iste, beatae sequi qui nulla eos at sed jhe kejrb erjhnbi
                 vuhebv ehbvihn cjnsjn fkasby hfbviu akshdbci cjshau ljobij akhbv udfnho agcdrtrc 
                 chvyasgsdb chdsfgv sjb snbashdguk mshdgub ajsdfhiub ,mvfeniun ajskdfni kwjdfhbi
                 HGvdc ahgdsfc jawdgc akjn bwuv kajh hlon chgyn anebfiagwef kajfhiluhf kajwehfig
                  exercitationem corrupti pariatur culpa voluptate aut ex aperiam
                   autem omnis placeat!
            </p>
            <button className='mt-2 w-[100%] py-[8px] bg-green-500 rounded-lg'>Book Enquery</button>
        </div>
        
    </div>
)
}
export default ViewProperty
