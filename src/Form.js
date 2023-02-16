import React from 'react'
import { useSelector } from "react-redux"; 

const Form = () => {
  const counter = useSelector((state) => state.counter.value);
    
  return (
    <div>
<h1>{counter}Form</h1>
<input type="text" placeholder="name"/>
<input type="text" placeholder="lastName"/>
<input type="submit"/>

    </div>
  )
}

export default Form