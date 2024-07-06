import { useState } from "react"
const Useeffect = () => {
    // const [cartCount,SetCount]=useState(0);
    // const handleclick=()=> SetCount(cartCount+1);
    // const [Username,SetUsername] = useState("krithick");
    // const [Age,SetAge]= useState(19);
    // const FuncName= ()=> {
    //   Username === "krithick"?SetUsername("Ameer"):SetUsername("krithick");
    // }
    // const FuncAge =()=> {
    //   Age === 19?SetAge(20):SetAge(19);

    // }
    const [name,Setname]= useState({name:"krithick",age:7});
    const handler=(e)=>{
      const newStateObject={...name};
      newStateObject.name=e.target.value;
      Setname(newStateObject);
    } 
  return (
  <>
  {/* <h1>No of items in Cart : {cartCount}</h1>
   <button onClick={handleclick}> {cartCount} Add To Cart</button> */}
   {/* <h1>{Username}</h1>
   <h1>{Age}</h1>
   <button onClick={FuncName}>Add new user</button>
   <button onClick={FuncAge}>Add new age </button><br /> */}
   <h1>{name.name} {name.age}</h1>
   <input type="text" placeholder="Enter Name " onChange={handler}/>
  </>
  )
}
export default Useeffect

