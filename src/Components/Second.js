import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Second =()=>{
    const [userdata,setUserdata] = useState({});
    const [data,setData] = useState([])

    useEffect(()=>{
           getData();
    },[])

    const getData=()=>{
        let val = JSON.parse(localStorage.getItem('newdata'))
        if (val){
            setData([...val]);
        }
    }
    
    const Next =()=>{    
        let add  = JSON.parse(localStorage.getItem("data"));
        let obj = {...add,...userdata}
        data.push(obj)
        localStorage.setItem("newdata",JSON.stringify(data));
    }

    return(
        <div>
             <form>
                <h4>Edu</h4>
                <input type="text" style={{fontWeight:'bold'}} value={userdata.Edu} placeholder="Edu" onChange={(e)=>setUserdata({...userdata, Edu:e.target.value})}></input><br/>
                <h4>Pro</h4>
                <input type="text" style={{fontWeight:'bold'}} value={userdata.Pro} placeholder="Pro" onChange={(e)=>setUserdata({...userdata, Pro:e.target.value})}></input><br/>
                <h4>City</h4>
                <input type="text" style={{fontWeight:'bold'}} value={userdata.City} placeholder="City" onChange={(e)=>setUserdata({...userdata, City:e.target.value})}></input><br/>
               <Link to = {"./Third"}><button onClick={Next}>NEXT</button></Link>  
            </form>

             {/* {
                 add.map((value,index)=>{
                     return(
                         <div>
                             <li>
                                 {value.Name}
                             </li>
                         </div>
                     )
                 })
             }        */}
        </div>
    )
}
export default Second