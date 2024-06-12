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
import MonsterCard from "./monsterCard";

import { useEffect, useState } from 'react';
import { QuestionList } from "@/types/questionList";
import { MonsterContextProvider, useMonsterContext } from "@/context/monsterContext";

export default function MonsterCreator(props: { monsterDetail: Monster }) { // questionList: QuestionList
    //const { questionList } = useMonsterContext();
    console.log(props.monsterDetail)

    return (
        <MonsterContextProvider>
       <Container sx={{width: 500, height: 800, m: 2}}>
            <Card sx={{maxWidth: 500}}>
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
                <Box alignItems="center" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
                {/* {
                    questionList.map((question, i) => (
                        <Typography variant="h4" key={i}>
                            {question.toString()}
                        </Typography>
                    )) //change from {} to (), for anonymous use effect uses {}, components uses ()
                } */}

                <Typography> Question 1</Typography>
                <DiscreteSlider/>
                <Typography> Question 2</Typography>
                <DiscreteSlider/>
                <Typography> Question 3</Typography>
                <DiscreteSlider/>
                <Typography> Question 4</Typography>
                <DiscreteSlider/>
                <Typography> Question 5</Typography>
                <DiscreteSlider/>

                {/* <Typography>{questionList.toString()}</Typography> */}
                </Box>
            </Card>
        </Container>

        </MonsterContextProvider>
    )
}



function DiscreteSlider() {
    return (
        <Box sx={{ width: 300, display: 'flex', justifyContent: 'center'}}>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                //   getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={10}
                marks
                min={10}
                max={110}
            />
        </Box>
    );
}