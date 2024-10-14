import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()  // less lag as loader is used 

    // const [data, setData] = useState([])   
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/aazaadcoder')
    //     .then((res)=> res.json())
    //     .then(data => setData(data))
    //  },[])
  return (
    <>
    <div className='text-center m-4 bg-gray-500 text-white p4 text-3xl'>
      Github UserName: {data?.login}
    </div>
    <div className='text-center m-4 bg-gray-500 text-white p4 text-3xl'>
      Github followers: {data?.followers}
    </div>
    <div className='text-center m-4 bg-gray-500 text-white p4 text-3xl'>
      Github following: {data?.following}
    </div>
    <img src={data?.avatar_url} alt="git avatar piture" width={300}/>
    </>
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const response = await fetch("https://api.github.com/users/aazaadcoder")

    return response.json()
}
