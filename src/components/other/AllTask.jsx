import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData= useContext(AuthContext)
    console.log(authData)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5  '>
         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>

        </div>

        <div className='h-[80%] '>
        {authData.employees.map(function(e){
            return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>{e.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 !text-blue-600'>{e.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 !text-yellow-400'>{e.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 !text-white-600'>{e.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 !text-red-600'>{e.taskCount.failed}</h5>
        </div>
        })}
        </div>
     
        
    </div>
  )
}

export default AllTask