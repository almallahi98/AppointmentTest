import React, { useCallback, useEffect, useState } from 'react'
import { getAddPatantByDocId } from '../../Api/ApiRequestHandelers'
import {useParams} from 'react-router-dom'

function AddAppointment() {
    const params=useParams();
    const [Data, setData] = useState([])
    const getApDat=useCallback(
      () => {
        if(params.id!==undefined)
        getAddPatantByDocId(params.id).then(res=>{
            setData(res.data);
        })
      },
      [params.id],
    )
    useEffect(() => {
        getApDat()
    }, [getApDat])
    
    
  return (
    <div className='cont mt-8'>
        <form className='flex flex-col justify-center items-center gap-2 w-3/4 py-2'>
            <div className='flex justify-evenly w-3/4'>
                <label htmlFor='patiantName' className='w-40'>patiant name</label>
                <select id='patiantName' className='w-[260px] h-[35px]'>
                    
                    {
                        Data.map((e:any)=>{return(<option value={e.pationtId}>{e.pationtId}</option>)})
                    }
                </select>
            </div>
            <div className='flex justify-evenly w-3/4'>
                <label htmlFor='timeStart' className='w-40'>Appointment Start</label>
                <input id='timeStart' type='datetime-local'/>
            </div>
            
            
            <button className='btn-send'
            onClick={e=>{
                e.preventDefault();
            }}
            >add</button>
        </form>
        
    </div>
  )
}

export default AddAppointment