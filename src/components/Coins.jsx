import React from 'react'
import { useState,useEffect } from 'react'
import { baseUrl } from './baseUrl'
import axios from 'axios'
const Coins = () => {
    //we will make a loading effect like in real world applications
    const [loading,setLoading]=useState(true)
    const[coins,setCoins]=useState([])
    //now we hVE TO FETCH THE URL RESPONSE DATA
    useEffect(()=>{
      const getCoinsData=async()=>{
        const {data}=await axios.get(`${baseUrl}/exchanges`)//data restructuring
        console.log(data)
        setExchanges(data)
        setLoading(false)
      }
      getExchangesData()
    },[])
  return (
    <div>Coins</div>
  )
}

export default Coins