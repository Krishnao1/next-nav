import React from 'react'
import {useRouter} from 'next/router'

function signUp() {
    const router = useRouter()

  const onclick =()=>{
      alert('u r login')
      router.push('/login')
  }
     
    return (
        <div>
            <h3 onClick={onclick}> Sign Up page </h3>
        </div>
    )
}

export default signUp
