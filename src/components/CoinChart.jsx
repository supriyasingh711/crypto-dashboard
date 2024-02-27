import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { baseUrl } from './baseUrl';
import { useParams } from 'react-router-dom';
import { BiData } from 'react-icons/bi';



const CoinChart = () => {
    const CoinChartData=()=>{
        const {id}=useParams
        const {data}=axios.get(`${baseUrl}/${id}/market_chart?vs_currency=inr&days=365`)
        console.log(data)
    }
  return (
    <div>CoinChart</div>
  )
}

export default CoinChart