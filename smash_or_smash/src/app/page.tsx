'use client';


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


import MonsterCard from "@/components/monsterCard";
import MonsterCreator from "@/components/monsterCreator";
import { useMonsterContext } from "@/context/monsterContext";
import { useEffect } from "react";
import MainPage from "@/components/mainPage";
import TopBar from "@/components/topBar";



export default function Home() {

  return (
    <main>

      <TopBar></TopBar>
      <MainPage></MainPage>


    </main>
  );
}
