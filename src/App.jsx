import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect,useState } from 'react'
import AuthProvider, { AuthContext } from './context/AuthProvider'

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)
  const [user, setUser] = useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const authData= useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    // console.log(loggedInUser)
    if(loggedInUser){
      // console.log("user logged in h")
      const userData= JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  // console.log(authData)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //   }
  // }, [authData])
  

  const handleLogin=(email,password)=>{
    if(email == "admin@me.com" && password =="123"){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
      // console.log(user)
    }
    else{
      alert("Invalid credentials")
    }
    // console.log(email,password)
  }
  // handleLogin("admin@me.com",123)
  
  return (
    <>
    {!user? <Login handleLogin ={handleLogin}/>:''}
    {user=="admin" ?<AdminDashboard/> :(user == 'employee'?<EmployeeDashboard data={loggedInUserData}/>:null)}
    </>
  )
}

export default App