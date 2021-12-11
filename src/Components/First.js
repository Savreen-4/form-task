import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Second from './Second';
const First =(props)=>{
const [user,setUser] = useState({});

const Next =()=>{
    user['id']=  Math.floor(Math.random()*100)
    // e.preventDefault(); 
    localStorage.setItem("data",JSON.stringify(user));
    console.log(user);
}

    return(
        <div>
            <h1>First</h1>
            <form>
                <h4>Name</h4>
                <input type="text" style={{fontWeight:'bold'}} value={user.Name} placeholder="Name" onChange={(e)=>setUser({...user, Name:e.target.value})}></input><br/>
                <h4>Age</h4>
                <input type="text" style={{fontWeight:'bold'}} value={user.Age} placeholder="Age" onChange={(e)=>setUser({...user, Age:e.target.value})}></input><br/>
                <h4>Gender</h4>
                <input type="text" style={{fontWeight:'bold'}} value={user.Gender} placeholder="Gender" onChange={(e)=>setUser({...user, Gender:e.target.value})}></input><br/>
                <Link  to={"./Second"}><button onClick={()=>Next(user)}>NEXT</button></Link>
            </form>
          
        </div>
    )
}
export default First;