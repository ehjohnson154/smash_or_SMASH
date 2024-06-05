'use client';


import MonsterCard from "@/components/monsterCard";
import { useMonsterContext } from "@/context/monsterContext";
import { useEffect } from "react";



export default function Home() {

  const { monsters } = useMonsterContext();

  useEffect(()=>{
    console.log("USE EFFECT FOR MONSTERS")
    console.log(monsters)
  }, [monsters])

  return (
    <main>
      <div>hello world</div>
      <div>{monsters.toString()}</div>
      {
      monsters.length>0? 
        <MonsterCard monsterDetail={monsters[0]}></MonsterCard>
      :
      <div></div>
      }

    </main>
  );
}
