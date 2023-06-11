import './App.css'
import './styles/main.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function App() {
  return (
    <div>
      <div className='header-div'> 
        <h1>Advanced Javascript Projects</h1>
    </div> 
    <div className="projects">
        <div>
          <a href="https://mirtizcalculator.netlify.app/" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://дмш-самрина.рф/800/600/https/www.vippng.com/png/detail/225-2258063_calculator-white-svg-download-png-calculator-black-and.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Kalkulyator
              </Typography>
              <Typography variant="body2">
                Kalkulyatorla hesablama aparmaq üçün birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
        <div>
          <a href="https://soru.netlify.app" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/soru.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Sual-cavab oyunu
              </Typography>
              <Typography variant="body2">
                Intellektinizi inkişaf etdirmək üçün birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
        <div>
          <a href="https://mirtizmusic.netlify.app" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/music.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Audio player
              </Typography>
              <Typography variant="body2">
                Musiqi dinləmək üçün birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
        <div>
          <a href="https://mirtizcinema.netlify.app" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/cinema.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Çakma İTicket
              </Typography>
              <Typography variant="body2">
                Stress atmaq üçün birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
        <div>
          <a href="https://mirtizrandom.netlify.app" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/random.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Random insan
              </Typography>
              <Typography variant="body2">
                Həyatda heç olmayan random insan yaratmaqçun birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
        <div>
          <a href="https://faketweet-murex.vercel.app/" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/tweet.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Fake Tweet
              </Typography>
              <Typography variant="body2">
                Fake tweet yaratmaqçun birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
        <div>
          <a href="https://spend-money-henna.vercel.app/" target='_blank'> 
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/sameddin.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Spend Sameddins Money
              </Typography>
              <Typography variant="body2">
                Saməddinin pulunu xərcləmək üçün birəbir birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
        <div>
          <a href="https://weather-app-flame-three.vercel.app/" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/weather.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                Hava məlumatı
              </Typography>
              <Typography variant="body2">
                Hava haqqında məlumat üçün birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

          </a>
        
        </div>
        <div>
          <a href="https://mirtiztodoapp.netlify.app" target='_blank'>
          <Card sx={{ width: 300,height:450}} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="../../src/images/todo.png"
              alt="green iguana"
            />
            <CardContent className='text-center'>
              <Typography gutterBottom variant="h5" component="div">
                To Do App
              </Typography>
              <Typography variant="body2">
                Gün içində plan yaratmaqçun birəbir birəbir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </a>
        
        </div>
    </div>
    </div>
  )
}

export default App
