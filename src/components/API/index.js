import axios from 'axios';

const url ="https://covid19.mathdro.id/api";


export const fetchApi = async () =>{
    try{

        const {data : {confirmed,deaths,recovered,lastUpdate}} = await axios.get(url);
        return {confirmed,deaths,recovered,lastUpdate};
    }
    catch{
       
    }
};

    
      export const fetchDailyData = async () => {
        try {
          const { data } = await axios.get(`${url}/daily`);
          //console.log(data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date })));
      
          return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
        } catch (error) {
          return error;
        }
      };
      

    
   



 