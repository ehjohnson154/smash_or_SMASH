import {
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
  Container,
  Grid,
  Button,
  Dialog,
  DialogTitle,
} from "@mui/material";

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Monster } from "@/types/monster";

import { useEffect, useState } from 'react';
import { useMonsterContext } from "@/context/monsterContext";
import MonsterCreator from "@/components/monsterCreator";
import MonsterCard from "./monsterCard";
// import { getMonsters, getRandomMonster } from '@/pages/api/getMonster';

export default function MainPage() {

  const { playerMonster, rivalMonster, setPlayerMonster, setRivalMonster} = useMonsterContext();
  
  // getMonster(setPlayerMonster) if player loses
  // getMonster(setRivalMonster) if player loses

  // useEffect(()=>{
  //   console.log("USE EFFECT FOR MONSTERS")
  //   console.log(monsters)
  // }, [])
  function getMonster(setMonster: Function){
    //console.log(monsters);
    fetch('/api/getMonster')
    .then(response => response.json()) //this runs the promise and sets the data only once we recieve it
    .then(json => setMonster(json.monster))
    .catch(error => console.error(error));
}

  function battle(){
    console.log("battle!")
    const playerRoll = getRandomInt(20);
    const rivalRoll = getRandomInt(20);
  
    playerRoll >= rivalRoll?
    getMonster(setPlayerMonster)
    :
    getMonster(setRivalMonster)
    console.log("someone won!!")
  }

  // function playerDialog(){
  //   getMonster(setPlayerMonster);
  //   <Dialog open={true}>
  //   <DialogTitle>Set backup account</DialogTitle>
  //   </Dialog>
  // }

  function handleSmash(){
    battle()
    console.log("click!");
}

  return (
    <Grid container spacing={3}>
      <Grid item>
      {
        playerMonster != null ?
          //<MonsterCard monsterDetail={monsters[0]}></MonsterCard>
          <MonsterCard monsterDetail={playerMonster}></MonsterCard>
          :
          <div></div>
      }
      </Grid>
      {/* <Box flexDirection='column' justifyContent='center'> */}
        <Button sx={{color: 'red', fontSize: 40}} onClick={battle}>SMASH!</Button>
      {/* </Box> */}

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



function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}