import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
const Exchanges = () => {
  const url="https://api.coingecko.com/api/v3/exchanges"
  //now we hVE TO FETCH THE URL RESPONSE DATA
  useEffect(()=>{
    const getExchangesData=async()=>{
      const {data}=await axios.get(url)//data restructuring
      console.log(data)
    }
    getExchangesData()
  })
  return (
<>
<Header/>
<div></div>

</>
  )
}

export default Exchanges