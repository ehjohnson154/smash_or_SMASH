'use client';


import MonsterCard from "@/components/monsterCard";
import MonsterCreator from "@/components/monsterCreator";
import { useMonsterContext } from "@/context/monsterContext";
import { useEffect } from "react";
import MainPage from "@/components/mainPage";



export default function Home() {

  const { monsters } = useMonsterContext();

  useEffect(()=>{
    console.log("USE EFFECT FOR MONSTERS")
    console.log(monsters)
  }, [monsters])

  return (
    <main>
        <MainPage></MainPage>

    </main>
  );
}
