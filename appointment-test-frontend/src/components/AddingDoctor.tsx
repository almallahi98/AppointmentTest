import React from 'react'
import DocCard from './gen/DocCard';

function AddingDoctor() {
  return (
    <>
        <div className='bg-yellow-500 w-full h-screen'>
            <form>
                <label htmlFor='dname'>Doctor name</label>
                <input 
                id='dname'
                type='text'
                className='w-80'/>
                <input type='button' 
                value={'ok'}
                className='block'
                onClick={e=>{
                    e.preventDefault();
                }}/>
            </form>
            <DocCard/>
        </div>
    </>
  )
}

export default AddingDoctor