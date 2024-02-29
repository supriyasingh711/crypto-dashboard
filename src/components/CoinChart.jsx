import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { baseUrl } from './baseUrl';
import { useParams } from 'react-router-dom';
import { BiData } from 'react-icons/bi';
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import Loader from './Loader';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


const CoinChart = (currency) => {
    const [chartData,setchartdata]=useState([])
    const [days,setDays]=useState(1)
    const {id}=useParams()
    

    const CoinChartData=async()=>{
        try{
        const {data}=await axios.get(`${baseUrl}/coins/${id}/market_chart?vs_currency=inr&days=${days}`)
        console.log(data.prices)
        setchartdata(data.prices)
        }catch(error){
            console.log(error);

        }
     
    }
    useEffect(()=>{
        CoinChartData()
    },[currency,id,days]) 
    
    const Mydata={
        labels:chartData.map((value)=>{
            const date=new Date(value[0])
            const time=date.getHours()>12
            ? `${date.getHours()-12}: ${date.getMinutes()} PM`:`${date.getHours()}:${date.getMinutes()} AM`
           return days===1?time:date.toLocaleDateString()
           
           
            console.log(date)
        }),
        datasets:[
            {
                labels:`price in past days ${days} in ${currency}`,
                data:chartData.map((value)=>value[1]),
                borderColor:'orange',
                borderWidth:'3'
            }
        ]
    }
    
  return (
    <>{

    
 chartData.length === 0 ? ( <Loader/> ):(

    <div>

<Line data={Mydata} options={{

    
   elements:{
       point:{
           radius:1
       }
   }
}} style={{width:"60rem"}}/> 
<div className="btns">
Change Duration:
<button onClick={()=>{setDays(1)}}>24 hrs</button>
<button onClick={()=>{setDays(30)}}>1 month</button>
<button onClick={()=>{setDays(365)}}>1 year</button>

</div>
</div>
 )
    }
    </>

  )
}

export default CoinChart