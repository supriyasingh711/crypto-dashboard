import React from 'react'
import { useState,useEffect } from 'react'
import { baseUrl } from './baseUrl'
import axios from 'axios'
import Loader from './Loader'
import Header from './Header'
import {Link} from 'react-router-dom'
const Coins = () => {

    //we will make a loading effect like in real world applications
    const [loading,setLoading]=useState(true)
    const[coins,setCoins]=useState([])
    const[currency,setCurrency]=useState('inr');
    const currencySymbol=currency==='inr'? '₹':'$';
    //now we hVE TO FETCH THE URL RESPONSE DATA
    useEffect(()=>{
      const getCoinsData=async()=>{
        const {data}=await axios.get(`${baseUrl}/coins/markets?vs_currency=${currency}`)//data restructuring
        console.log(data)
        setCoins(data)
        setLoading(false)
      }
      getCoinsData()
    },[])
  return (
    <>

      {
        loading?<Loader/>:<>
        <Header/>
        <div className="btns">
          <button onClick={()=>{setCurrency('inr')}}>inr</button>
          <button onClick={()=>{setCurrency('usd')}}>usd</button>
        </div>
        {
          coins.map((item,i)=>{
            return(
             <CoinCard key={i} id={item.id} item={item} i={i} currencySymbol={currencySymbol} />
            )
          })
        }
        </>
      }
    </>
  )
}
const CoinCard=({item,i,currencySymbol,id})=>{
  const profit=item.price_change_percentage_24h>0;
  return(
   <Link to={`/coins/${id}`} style={{color:"white",textDecoration:"none"}}>
    <div key={i} className='ex-cards'>
    <div className="image">
<img height={"80px"} src={item.image} alt="" />
    </div>
    <div className="name">{item.name}

    </div>
    <div className="price">{currencySymbol} {item.current_price.toFixed(0)}
    </div>
    <div style={ profit ? {color:"lightgreen"}:{color:"red"}} className="rank">
{profit ? "+" + item.price_change_percentage_24h.toFixed(2):item.price_change_percentage_24h.toFixed(2)}
    </div>
</div>
   </Link>
  )
}
export default Coins