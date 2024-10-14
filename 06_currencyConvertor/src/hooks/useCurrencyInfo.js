import {useEffect, useState } from 'react'


function useCurrencyInfo (currency){

    const [data, setData ] = useState({})
    // using a empty oject inside so that it doesnot crash if no value in data 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())// as res of api is a string 
        .then((res)=> setData(res[currency]))
        console.log(data)

    },[currency]) // whenever change in currency we will call the api again so it is a dependency here 

    // return [data, setData]  // this doesnot work here as how will we access currency 

    return data // this is returning the data
}

export default useCurrencyInfo // this returning the method and using this i can get the data so here we have created a custom hook 