import React from 'react'
import { useState } from 'react'
const Reactformusestate = () => {
    const [user,Setuser]=useState({
        name:"krithick",
        age:89,
        gender:"Male",
        Ismarried:"true",
    })
    function changehandler (e){
      const name=e.target.name;
    //   console.log(name);
    const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
    Setuser({...user,[name]:value})
    }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>  
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>  
            </tr>
            <tr>
                <td>gender</td>
                <td>{user.gender}</td>  
            </tr>
            <tr>
                <td>Ismarried</td>
                <td>{user.Ismarried}</td>  
            </tr>
        </tbody>
    </table>
    <form>
    <input type="text" placeholder='Enter name' value={user.name} name="name" onChange={changehandler}/>
    <input type="number" placeholder='Enter Age' value={user.age} name="age" onChange={changehandler}/>
    <label htmlFor='male'>    
        <input type="radio" id="male" name="gender" checked={user.gender="Male"} 
        value="male"
        />Male
        </label>
        <label htmlfor="female">
    <input type="radio" id="female" name="gender" checked={user.gender="Female"}
    value="female"
    />Female
    </label>
    <label htmlFor='check'>
     <input type="checkbox" id="check"  onChange={changehandler} name="ismarried"  checked={user.Ismarried} /> isMarried
     </label>
     </form>
    </>
  )
}

export default Reactformusestate