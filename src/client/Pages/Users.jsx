
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../style.css"



export default function Users({token,role}){
   
    const[users,setUsers]=useState([])
    const navigate = useNavigate();
    
    async function fetchAllUsers (){
        try {
            const response = await fetch('http://localhost:3000/api/users', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
              
            },
          });
          const result = await response.json();
          return result.users;
        } catch (err) {
        }
      }
    function renderAllUsers(){
        return users && users.map((user)=>{
            return (
               
                <div className='allUsers' key={user.id}>
                    <h4>Username:{user.name}</h4>
                    <h4>User Email:{user.email}</h4>
                    <h4>User Role :{user.role}</h4>
                    <h4>User Password:{user.password}</h4>
                </div >
            )
                
        })
    }
    useEffect(()=>{
        async function allUsersHandler(){
            const result = await fetchAllUsers({token,role})
            setUsers(result);
        }
        allUsersHandler()

    },[]
    )
    return (
       <>
       <div>
        <Navbar token={token}/>
       </div>
        <div className="users">
             {renderAllUsers()}
        </div>
        <div>
        <button className="bnUser" onClick={()=> navigate('/admin')}>Back to AdminDashboard</button>
        </div>
        </>
        )
}

