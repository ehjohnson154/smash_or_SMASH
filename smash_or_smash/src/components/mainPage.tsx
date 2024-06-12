import {
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
  Container,
  Grid,
  Button
} from "@mui/material";

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Monster } from "@/types/monster";

import { useEffect, useState } from 'react';
import { useMonsterContext } from "@/context/monsterContext";
import MonsterCreator from "@/components/monsterCreator";
import MonsterCard from "./monsterCard";

export default function MainPage() {

  const { playerMonster, rivalMonster} = useMonsterContext();

  // useEffect(()=>{
  //   console.log("USE EFFECT FOR MONSTERS")
  //   console.log(monsters)
  // }, [])


  return (
    <Grid container spacing={3}>
      <Grid item>
      {
        playerMonster != null ?
          //<MonsterCard monsterDetail={monsters[0]}></MonsterCard>
          <MonsterCreator monsterDetail={playerMonster}></MonsterCreator>
          :
          <div></div>
      }
      </Grid>
      <Button>Smash?</Button>
      <Button>SMASH!</Button>
      <Grid item>
      {
        rivalMonster != null ?
          //<MonsterCard monsterDetail={monsters[0]}></MonsterCard>
          <MonsterCard monsterDetail={rivalMonster}></MonsterCard>
          :
          <div></div>
      }
      </Grid>

    </Grid>
  );

}