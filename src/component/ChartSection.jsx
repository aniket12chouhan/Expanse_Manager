import React, { useEffect, useState } from 'react'
import {  ArcElement, Chart, Legend, Title, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
// Chart.register(
//     ArcElement, Legend, Title, Tooltip
// )
Chart.register(
    ArcElement, Legend, Title, Tooltip
)




const ChartSection = () => {

    const {TotalIncome,TotalExpense} = useSelector(state =>state.expense)

    const [data , setdata] = useState({
        datasets: [{
            // data: [TotalIncome, TotalExpense, TotalIncome-TotalExpense],
            data: [],
            backgroundColor: [
               
              ],
              hoverOffset: 4
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Total-Income',
            'Total-Expense',
            'Net-Balance'
        ]
    })
    useEffect(()=>{
        setdata({
            datasets: [{
                data: [TotalIncome, TotalExpense, TotalIncome-TotalExpense],
                // data: [2],
                backgroundColor: [
                    '#03C988',
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)'
                  ],
                  hoverOffset: 5
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Total-Income',
                'Total-Expense',
                'Net-Balance'
            ]
        })

    } ,[TotalExpense,TotalIncome])

  return (
    <>
   <div className="pie">
   <Pie data={data} />
   </div>
    </>
  )
}

export default ChartSection