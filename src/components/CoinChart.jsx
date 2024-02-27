import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { baseUrl } from './baseUrl';
import { useParams } from 'react-router-dom';
import { BiData } from 'react-icons/bi';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js'
// import {Line} from 'react-chartjs-2';
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// )


const CoinChart = () => {
    const [chartData,setchartdata]=useState([])
    const CoinChartData=async()=>{
        try{
            const {id}=useParams()
        const {data}=await axios.get(`${baseUrl}/coins/${id}/market_chart?vs_currency=inr&days=365`)
        console.log(data)
        setchartdata(data.prices)
        }catch(error){
            console.log(error);

        }
        useEffect(()=>{
            CoinChartData()
        },[]) 
    }
    
    const Mydata={
        labels:chartData.map((value)=>{
            console.log(value)
        })
    }
    
  return (
    <div>

        {/* <Line data={Mydata}/> */}
    </div>
  )
}

export default CoinChart