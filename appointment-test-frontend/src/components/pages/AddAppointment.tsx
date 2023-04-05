import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getAddPatantByDocId } from '../../Api/ApiRequestHandelers'
import {useParams} from 'react-router-dom'

function AddAppointment() {
    const params=useParams();
    const [Data, setData] = useState([]);
    const date=useRef<HTMLInputElement>(null);
    const selecter=useRef<HTMLSelectElement>(null);
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
                <select id='patiantName'
                className='w-[260px] h-[35px]'
                ref={selecter}
                >
                    
                    {
                        Data.map((e:any,i)=>{return(<option key={i} value={e.pationtId}>{e.pationtId}</option>)})
                    }
                </select>
            </div>
            <div className='flex justify-evenly w-3/4'>
                <label htmlFor='timeStart' className='w-40'>Appointment Start</label>
                <input id='timeStart' type='datetime-local'ref={date}/>
            </div>
            
            
            <button className='btn-send'
            onClick={e=>{
                e.preventDefault();
                console.log({
                    date:date.current?.value,
                    s:selecter.current?.value,
                    docid:params.id
                });
                
            }}
            >add</button>
        </form>
        <div className='w-3/4 bg-gray-100'>
            {
                Data.map((e:any,i)=>{
                    return(<div className='flex justify-around w-full gap-4 py-4 bg-gray-100 rounded border-2'>
                        <p>
                            <span className='font-bold text-lg mx-2'>appointment start: </span>{e.startShift}
                            <span className='font-bold text-lg mx-2'>appointment end:</span>{e.endShift}
                        </p>
                        <button className='btn-clear'> delete</button>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default AddAppointment