'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Monster } from '@/types/monster';

import { getMonsters, getRandomMonster } from '@/pages/api/getMonster';

// import { db } from '../app/firebase';
// import { getDoc, setDoc, doc } from 'firebase/firestore';


interface monsterContextProps {
    monsters: Monster[],
    playerMonster: Monster | null,
    rivalMonster: Monster | null,
}

const MonsterContext = createContext<monsterContextProps>({
    monsters: [],
    playerMonster: null,
    rivalMonster: null
})

export function MonsterContextProvider({children}: {children: ReactNode}){
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [playerMonster, setPlayerMonster] = useState<Monster | null>(null);
    const [rivalMonster, setRivalMonster] = useState<Monster | null>(null);

    const monstersCount = 1;
    
    useEffect(()=>{
        console.log("Use effect for monster context")
        console.log(monsters);
        fetch('/api/getMonster')
        .then(response => response.json()) //this runs the promise and sets the data only once we recieve it
        .then(json => setMonsters(json.monsters))
        .catch(error => console.error(error));

        // getMonsters(monstersCount).then((r)=>setMonsters(r));
    },[])


    // useEffect(()=>{
    //     if (animals.length == 0){
    //         initAnimals();
    //     }
    // },[])

    // async function initMonsters(){
    //     const animals = await readAnimals();
    //     if (animals.length == 0){
    //         getAnimals(catCount, dogCount).then((res)=>setAnimals(res));
    //     }
    //     else {
    //         setAnimals(animals);
    //     }
        
    // // }

    // async function readAnimals(){
    //     let exists = true;
    //     let counter = 0;
    //     const animals = [];
    //     while (exists){
    //         const docRef = doc(db, "animals", counter.toString());
    //         const docSnap = await getDoc(docRef);
    //         if (docSnap.exists()){
    //             animals.push(docSnap.data() as Animal);
    //             counter++;
    //         } 
    //         else {
    //             exists = false;
    //         }
    //     }
    //     return animals;
    // }


    return (
        <MonsterContext.Provider value={{monsters: monsters, playerMonster: playerMonster, rivalMonster: rivalMonster }}>
            {children}
        </MonsterContext.Provider>
    )
}

export function useMonsterContext(){
    return useContext(MonsterContext);
}



function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }