import {
    Typography,
    Card,
    CardMedia,
    Box,
    CardContent,
    Container,
    Slider,
} from "@mui/material";

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Monster } from "@/types/monster";

import { useEffect, useState } from 'react';

export default function MonsterCard(props: {monsterDetail: Monster}){


    return (
        <Container sx={{width: 600, m: 2}}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                component="img"
                sx={{ width: 151, p: 2 }}
                image={props.monsterDetail.image}
                alt={`${props.monsterDetail.name} image`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography sx={{textTransform: "capitalize", m: "10px"}} component="span" variant="h3">
                        {props.monsterDetail.name}
                        </Typography>
                        <Typography sx={{fontWeight: "bold"}} variant="h3" color="text.secondary" component="span">
                        {props.monsterDetail.alignment}
                        </Typography>
                        <Typography sx={{textTransform: "capitalize", m: "10px"}} component="div" variant="h4">
                        {props.monsterDetail.type}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Container>
    )

}



function DiscreteSlider() {
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>
    );
  }