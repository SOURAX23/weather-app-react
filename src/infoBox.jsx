import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FoggyIcon from '@mui/icons-material/Foggy';
import "./ibox.css"

export default function InfoBox({info}){
    const init_url="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJva2VuJTIwY2xvdWRzfGVufDB8fDB8fHww";

    let hot_url='https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
    let cold_url='https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';
    let rain_url='https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww';

    
   
    return(
        <div className="InfoBox">
        <div className="container">
        <Card sx={{ maxWidth: 345, 
                    borderRadius: 4,
                    boxShadow: 8,
                  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>70 ? rain_url : info.temp>15 ? hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city } 
          {info.weather.includes("clear") && <WbSunnyIcon />}
          {info.weather.includes("cloud") && <CloudIcon />}
          {info.weather.includes("rain") && <GrainIcon />}
          {info.weather.includes("thunder") && <ThunderstormIcon />}
          {info.weather.includes("snow") && <AcUnitIcon />}
          {info.weather.includes("mist") && <FoggyIcon />}
          {info.weather.includes("haze") && <FoggyIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
            <p>Temperature:{info.temp}&deg;C</p>
            <p>Humidity:{info.humidity}</p>
            <p>Max Temperature:{info.tempMax}</p>
            <p>Min Temperature:{info.tempMin}</p>
            <p>
                The weather can described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
            </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}