import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardTecnico({name, years, img}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tecnico  con {years} años de experiencia.
          </Typography>
          
          
        </CardContent>
      </CardActionArea>
      <div className='w-full grid place-items-center pb-4'>


        <a class="bg-gray-700 flex flex-row py-4 px-4 w-[200px] rounded-2xl text-white uppercase font-medium shadow-2xl hover:bg-slate-500 hover:text-white justify-center" href="/Reparacion">ASIGNAR</a>


      </div>

    </Card>
  );
}