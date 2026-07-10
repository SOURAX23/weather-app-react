import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import "./search.css"

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY=import.meta.env.VITE_API_KEY;

    let getInfo=async()=>{
        try {
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonres=await response.json();
        let result={
            city:city,
            temp:jsonres.main.temp,
            tempMin:jsonres.main.temp_min,
            tempMax:jsonres.main.temp_max,
            humidity:jsonres.main.humidity,
            feelsLike:jsonres.main.feels_like,
            weather:jsonres.weather[0].description,
        };
        console.log(result);
        return result;
        } catch (error) {
            throw error;
        }
        
    };
    
    let handleChange=(e)=>{
        setCity(e.target.value);
    }
    let handleSumbit=async(e)=>{
        try {
            e.preventDefault();
            setError(false);
        console.log( city);
        setCity("");
        let newInfo=await getInfo();
        updateInfo(newInfo);
        } catch (error) {
            setError(true)
        }
        
    }

    return (
        <div className='sbox'>
        <h3>Search for weather</h3>
        <form onSubmit={handleSumbit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
        <br />
        <Button variant="contained" endIcon={<SearchIcon />} type='sumbit'>
        Send
      </Button>
      { error ? <p>No such place exists</p>:''}
      </form>
        </div>
    )
}