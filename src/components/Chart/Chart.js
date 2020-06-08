import React,{ useState,useEffect } from 'react';
import { fetchDailyData } from '../API/index';
import { StylesProvider } from '@material-ui/core';
import { Line, Bar } from 'react-chartjs-2';
import Styles from './Chart.module.css'




    const Chart = () => {
        const [dailyData, setDailyData] = useState([]);
      
        useEffect(() => {
            const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();
            console.log(initialDailyData);
            console.log(setDailyData(initialDailyData));
            
          };
      
          fetchMyAPI();
        }, []);

    

        const lineChart = (
            dailyData[0] ? ( 
        <Line data = { {
                labels : dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                  }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                  },
                  ]
            } }/>
            ) : null

        );
            
    
      
    return (
        <div className={Styles.container}>
          {lineChart}
    </div>
    );
};



export default Chart;