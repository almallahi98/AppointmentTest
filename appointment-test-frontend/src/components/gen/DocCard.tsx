import React from 'react'
import { DeleteDoctor } from '../../Api/ApiRequestHandelers';
import {useNavigate} from 'react-router-dom'

function DocCard(props:any) {
   const navigate=useNavigate();
  return (
    <div className='bg-white w-3/4 rounded p-2 border-2 border-green-600'>
        <div className='flex justify-between'>
            <p className='p-2'><span className='font-bold text-lg'>Dr.</span>{props.name}</p>
            <div className='flex justify-between gap-3'>
                <button className='bg-yellow-300 px-4 rounded font-semibold'
                onClick={()=>{
                    navigate('/addAppointment/'+props.id)
                }}
                >Appointments</button>
                <button 
                className='btn-clear'
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
    </div>
  )
}

export default DocCard