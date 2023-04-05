import React, { useCallback, useEffect,useRef,useState } from 'react'
import DocCard from './gen/DocCard';
import { AddDoctor, getAllDoctors } from '../Api/ApiRequestHandelers';

function AddingDoctor() {
    const [data, setdata] = useState([]);
    const docName=useRef<string>('');
    const getAllDoctorsData=()=>{
        getAllDoctors().then(res=>{
            console.log(res.data);
            setdata(res.data)
        })
        
        
    }
    
    const d=useCallback(()=>{
        getAllDoctorsData();
        },
      [],
    )
    
    
    useEffect(() => {
        d();
    }, [d])
    
  return (
    <>
        <div className='pt-10 h-screen'>
            <div className='cont'>
            <form className='flex justify-center items-center w-3/4 py-2'>
                <label htmlFor='dname'>Doctor name</label>
                <input 
                id='dname'
                type='text'
                className='w-80'
                onChange={e=>{
                    docName.current=e.target.value;
                }}/>
                <button
                className='btn-send'
                onClick={e=>{
                    e.preventDefault();
                    AddDoctor(docName.current).then(res=>{
                        if(res.status===200)
                        {
                            getAllDoctorsData();
                        }
                    });
                }}>add</button>
            </form>
            {
                data.map((elm:any,i)=>{
                    return(
                    <DocCard key={i} name={elm.doctorName} id={elm.doctorId} onClick={getAllDoctorsData}/>
                    )
                })
            }
            </div>
        </div>
    </>
  )
}

export default AddingDoctor