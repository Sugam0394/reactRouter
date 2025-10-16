import React from 'react'
import { useState , useEffect } from 'react'
import { data } from 'react-router-dom';
import myImage from '../../assets/Sugam06.png'

function GitHub() {
  const [following , setFollowing ] = useState([]);


  useEffect(() => {
    const username = "Sugam0394"
    // fetch the list of followes
    fetch(`https://api.github.com/users/Sugam0394/following`)
    .then(res => res.json())
    .then(data => setFollowing(data.following))
  } , [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Following: {following}
    <img src={myImage} alt="Git picture" width={300} srcset="" />
    
    
    </div>
  )
}

export default GitHub