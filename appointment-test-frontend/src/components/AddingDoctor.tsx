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
        <div className='bg-green-300 flex flex-col items-center gap-2 pt-10 h-screen'>
            <form className='flex justify-center items-center w-2/4 py-2 bg-gray-100'>
                <label htmlFor='dname'>Doctor name</label>
                <input 
                id='dname'
                type='text'
                className='w-80'
                onChange={e=>{
                    docName.current=e.target.value;
                }}/>
                <input type='button' 
                value={'add'}
                className='block w-40 bg-green-600 rounded border-0 m-1'
                onClick={e=>{
                    e.preventDefault();
                    AddDoctor(docName.current).then(res=>{
                        getAllDoctorsData()
                    });
                }}/>
            </form>
            {
                data.map((elm:any,i)=>{
                    return(
                    <DocCard key={i} name={elm.doctorName} id={elm.doctorId} onClick={getAllDoctorsData}/>
                    )
                })
            }
        </div>
    </>
  )
}

export default AddingDoctor