import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center mt-10 text-xl'>User : {userid}</div>
  )
}

export default User