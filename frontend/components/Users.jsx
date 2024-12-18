import { useCallback, useEffect, useState } from "react"
import axios from 'axios'
import { User } from "./User";


export const Users = () =>{
const [users, setUsers] = useState([]);
const [filter,steFilter] = useState('');
const [Id, setId] =useState();


    useEffect(function (){   
      function fatchData(){
        axios.get('http://localhost:3000/api/v1/user/bulk?filter='+filter).then(respose => {
          setUsers(respose.data.user)
        })  
      }
       clearTimeout(Id);
       setId( setTimeout(()=>{
          fatchData()
      },500))
             
    },[filter])

 return <div className="p-2">
        <div className="mt-10 font-bold text-lg box-border " >Your Balance: 1000</div>
        <div className="mt-10 box-border ">
        <label htmlFor="Users" className="font-bold ">Users</label><br />
        <input type= "text" className=" w-[calc(100vw-50px)] border-2 h-5shadow-inner focus:border-blue-500 focus:outline-none rounded " onChange={(e)=>{
                   steFilter(e.target.value) 
                }}/>
        </div>
        <div>
          {users.map(user => <User key={user._id} user = {user} />)} 
        </div>
 </div>
}