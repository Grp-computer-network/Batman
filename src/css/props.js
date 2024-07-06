import React from 'react'
import { UseState } from 'react'
export const props = () => {
    const [cartcount,setcount]= UseState(0)
    const handleclick=()=> setcount(cartcount+1)
return (
  <div>
    <h1>Number of items in the cart : {cartcount}</h1>
    <button onClick={handleclick}>Add To cart</button>
</div>
  )
}
export default props