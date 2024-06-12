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
// import MonsterCard from "./monsterCard";

import { useEffect, useState } from 'react';
import { QuestionList } from "@/types/questionList";
import { MonsterContextProvider, useMonsterContext } from "@/context/monsterContext";

export default function MonsterCard(props: { monsterDetail: Monster }) { // questionList: QuestionList
    const { questionList } = useMonsterContext();

    return (
        <MonsterContextProvider>
       <Container sx={{ padding: 10}}>
            <Card sx={{backgroundColor: 'tan', maxWidth: 500}}>
                <CardMedia
                component="img"
                sx={{ width: 151, p: 2, justifyContent: 'center', display: 'flex' }}
                image={props.monsterDetail.image}
                //image={props.monsterDetail.image? props.monsterDetail.image: "empty"}
                alt={`${props.monsterDetail.name} image`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                        <Typography sx={{textTransform: "capitalize", m: "10px"}} component="span" variant="h3">
                        {props.monsterDetail.name}
                        </Typography>
                        <Typography sx={{fontWeight: "bold"}} variant="h3" color="text.secondary" component="span">
                        {props.monsterDetail.alignment}
                        </Typography>
                        <Typography sx={{textTransform: "capitalize", m: "10px"}} component="div" variant="h4">
                        {props.monsterDetail.type}
                        </Typography>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Container>

        </MonsterContextProvider>
    )
}

