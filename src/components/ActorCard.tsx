import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CastType } from '../types';


type PropsType = {
  actor : CastType
}


const ActorCard:React.FC<PropsType> = React.memo(({actor}) => {
  return (
    <Card sx={{ maxWidth: 140 }}>
 
        <CardMedia
          width={140}
          height={230}
          component="img"
          image={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
          alt="actor"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {actor.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {actor.character}
          </Typography>
        </CardContent>
    
    </Card>
  );
})

export default ActorCard