import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const Third = ()=>{
    
const[add,setAdd]= useState([]);
const [arr, setArr] = useState([]);
const [editList,setEditlist] = useState({});
const[idx,setIdx] = useState(null)

const [isOpen,setIsOpen] = React.useState(false);

useEffect(()=>{
    get()
},[add])

const get =()=>{
    let arr = JSON.parse(localStorage.getItem("newdata")) 
    setAdd(arr);
}


const handleDelete = index => {
    setAdd(add.splice(index, 1));
    localStorage.setItem('newdata', JSON.stringify(add));
   
}
  
const handleUpdate = () => {
    let prevData = JSON.parse(localStorage.getItem('newdata'));
    prevData.splice(idx,1,editList);
    localStorage.setItem('newdata', JSON.stringify(prevData));
    setIsOpen(false)
} 

const handleEdit=(value,index)=>{
    setEditlist({...value});
    setIsOpen(true)
    setIdx(index)
    arr.splice(0,1,value);
}

return(
    <div>
          
           <table>      
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Edu</th>
                        <th>Pro</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Update</th>
                    <tbody>
                        {
                            add.map( (value,index)=>{
                                return(
                                    // <div  key={index}>
                                         <tr>
                                    <td>
                                    
                                    {value.Name}
                                    </td> 
                                    <td>
                                     {value.Age}
                                    </td> 
                                    <td>
                                    {value.Gender}
                                    </td> 
                                    <td>
                                    {value.Edu}
                                    </td> 
                                    <td>
                                    {value.Pro}
                                    </td> 
                                    <td>
                                    {value.City}
                                    </td> 
                                    <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                                    <td><button onClick={() => handleEdit(value, index)}>Edit</button></td>
                                   
                                     </tr>
                                   
                                )
    
                            } )
                        }
                        
                    </tbody>
                  
                </table>
                <Modal isOpen={isOpen}
                                      style={customStyles}
                                    >
                                        {
                                        arr.map((value)=>{
                                            return(
                                                <div>
                                    <h4>Name</h4>
                                    {/* <input type="text" style={{fontWeight:'bold'}} onClick={()=>handleEditClick(user)} placeholder="Name" value={user.name} onChange={(e)=>setUser(e.target.value)}></input><br/> */}
                                    <input type="text" placeholder={value.Name}  defaultValue={value.Name} onChange={(e)=>setEditlist({...editList, Name: e.target.value})}></input><br/>
                                    <h4>Age</h4>
                                    <input type="text" style={{fontWeight:'bold'}} defaultValue={value.Age}   onChange={(e)=>setEditlist({...editList, Age: e.target.value})}></input><br/>
                                    <h4>Gender</h4>
                                    <input type="text" style={{fontWeight:'bold'}}  defaultValue={value.Gender} placeholder="Gender"  onChange={(e)=>setEditlist({...editList, Gender: e.target.value})}></input><br/>
                                    <h4>Edu</h4>
                                    <input type="text" style={{fontWeight:'bold'}} defaultValue ={value.Edu} placeholder="Edu"  onChange={(e)=>setEditlist({...editList, Edu: e.target.value})}></input><br/>
                                    <h4>Pro</h4>
                                    <input type="text" style={{fontWeight:'bold'}} defaultValue={value.Pro} placeholder="Pro"  onChange={(e)=>setEditlist({...editList, Pro: e.target.value})}></input><br/>
                                    <h4>City</h4>
                                    <input type="text" style={{fontWeight:'bold'}} defaultValue={value.City} placeholder="City" onChange={(e)=>setEditlist({...editList, City: e.target.value})}></input><br/>
                                   
                                   <button onClick={()=>handleUpdate()}>Update</button>
                                     </div>
                                            )
                                        })}
                                   
                                    </Modal>
                
                <Link to = {"./First"}><button>BACK</button></Link>
    
    
        {/* {
            add.map((value,index)=>{
                return(
                    <div>
                        <tr>
                        <p>{value.Name}</p>
                        </tr>
                        <tr>{value.Age}</tr>
                        </div>
                )
            })
        } */}

    </div>
)
}
export default Third;