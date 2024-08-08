import React, { useState } from 'react'

function Login() {

    const [raqam,setRaqam] = useState("")
    const [parol,setParol] = useState("")
    

    const handleSubmit=(e)=>{
       e.preventDefault()
fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      // Add parameters here
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        // Handle data
     })
     .catch((err) => {
        console.log(err.message);
     })
    }
  return (
    <div>
        <form action="#">
            <input onChange={(e)=>setRaqam(e?.target.value)} type="username" placeholder='username' required/>
            <input onChange={(e)=>setParol(e?.target.value)} type="password" placeholder='password'  required/>
              <button onClick={handleSubmit} type='submit'>Login qilish</button>
        </form>
    </div>
  )
}

export default Login