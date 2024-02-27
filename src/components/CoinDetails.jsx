import React from 'react'
import { useEffect,useState } from 'react'
import { baseUrl } from './baseUrl'
import Loader from './Loader'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import img from '../assets/pics/ethLogo.jpg'
import './CoinDetail.scss'
import {BiSolidUpArrow,BiSolidDownArrow} from "react-icons/bi";
import {IoPulseOutline} from 'react-icons/io5'
const CoinDetails = () => {
  const [coin,setCoin]=useState([])
  const [loading,setLoading]=useState(true)
  const {id}=useParams()
  //QUESTION MARK here is optional chaining which is used so that no error comes up when there is no data.
  const profit=coin.market_data?.price_change_percentage_24h>0;
  const [currency,setCurrency]=useState('inr');
  const currencySymbol=currency==='inr'? '₹':'$';

  useEffect(()=>{
    const getCoin=async()=>{
      try{
          const {data}=await axios.get(`${baseUrl}/coins/${id}`);
          console.log(data)
          setCoin(data)
          setLoading(false)
        }catch(error)
      {
        console.log(error)
        setLoading(false)


      }
    }
    getCoin()
  },[id])
  return (
<>
{
  loading?<Loader/>:<>
  <div className='coinDetail'>
        <div className="coinInfo">
        <div className="btns">
          Change Currency
          <button onClick={()=>{setCurrency('inr')}}>inr</button>
          <button onClick={()=>{setCurrency('usd')}}>usd</button>
        </div>
          <div className="time">
           Last Updated on <span>{coin.last_updated}</span> 
          </div>
          
          <div className="coinImage">
            <img src={coin.image.large} alt="" />
          </div>
          <div className="coinName">
            {coin.name}
          </div>
          <div className="coinPrice">
           {currencySymbol} {coin.market_data.current_price[currency]}
          </div>
          <div className="coinProfit">{profit? <BiSolidUpArrow color='green'/>:<BiSolidDownArrow color='red'/>}
             {coin.market_data.price_change_percentage_24h}%
          </div>
          <div className="coinRank">
            <IoPulseOutline color='orange'/> #{coin.market_cap_rank}
          </div>
          <div className="coinDescription">
            {coin.description['en'].split('.')[0]}
          </div>

        </div>
  </div>
  
  </>
}
</>


    )
}

export default CoinDetails