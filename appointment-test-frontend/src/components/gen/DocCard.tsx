import React from 'react'
import { DeleteDoctor } from '../../Api/ApiRequestHandelers';

function DocCard(props:any) {
   
  return (
    <div className='bg-white w-3/4 rounded p-2 border-2 border-green-600'>
        <div className='flex justify-between'>
            <p className='p-2'>{props.name}</p>
            <button 
            className='
            bg-red-600
            text-white text-lg font-semibold
            p-2 rounded'
            onClick={()=>
            {
                
                DeleteDoctor(props.id).then(res=>{
                    if(res.status=== 200)
                    {
                        props.onClick();
                    }
                })
                
            }}>delete</button>
        </div>
    </div>
  )
}

export default DocCard