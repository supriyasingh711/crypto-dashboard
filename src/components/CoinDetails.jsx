import React from 'react'
import { useEffect,useState } from 'react'
import { baseUrl } from './baseUrl'
import Loader from './Loader'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CoinDetails = () => {
  const {id}=useParams()
  useEffect(()=>{
    const getCoin=async()=>{
      try{
          const {data}=await axios.get(`${baseUrl}/coins/${id}`);
          console.log(data)
        }catch(error)
      {
        console.log(error)

      }
    }
    getCoin()
  },[])
  return (
    <div>CoinDetails</div>
  )
}

export default CoinDetails