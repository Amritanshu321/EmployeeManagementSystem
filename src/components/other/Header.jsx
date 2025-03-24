import React,{useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data}) => {
  // const [username, setUserName] = useState('')
  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstname)
  // }
  const logoutUser=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  console.log(data)
  return (
    <div className='flex items-center justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>user👋</span></h1>
        <button onClick={logoutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header