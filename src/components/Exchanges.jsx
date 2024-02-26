import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { baseUrl } from './baseUrl'
import Loader from './Loader'
import ethLogo from '../assets/pics/ethLogo.jpg'
import './Exchanges.css'


const Exchanges = () => {
  //we will make a loading effect like in real world applications
  const [loading,setLoading]=useState(true)
  const[exchanges,setExchanges]=useState([])
  //now we hVE TO FETCH THE URL RESPONSE DATA
  useEffect(()=>{
    const getExchangesData=async()=>{
      const {data}=await axios.get(`${baseUrl}/exchanges`)//data restructuring
      console.log(data)
      setExchanges(data)
      setLoading(false)
    }
    getExchangesData()
  },[])
  return (
<>
{
  loading?<Loader/>:<><Header/></>
}
<div>
{
  exchanges.map((item,i)=>{
    return (
      <div key={i} className='ex-cards'>
      <div className="image">
<img height={"80px"} src={item.image} alt="" />
      </div>
      <div className="name">{item.name}

      </div>
      <div className="price">{item.trade_volume_24h_btc.toFixed(0)}
      </div>
      <div className="rank">
{item.trust_score_rank}
      </div>
</div>
    )
  })
}
</div>
</>
  )
}

export default Exchanges