'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Monster } from '@/types/monster';

import { getMonsters, getRandomMonster } from '@/pages/api/getMonster';
import { QuestionList } from '@/types/questionList';

// import { db } from '../app/firebase';
// import { getDoc, setDoc, doc } from 'firebase/firestore';


interface monsterContextProps {
    monsters: Monster[],
    playerMonster: Monster | null,
    rivalMonster: Monster | null,
    questionList: QuestionList | null,
}

const MonsterContext = createContext<monsterContextProps>({
    monsters: [],
    playerMonster: null,
    rivalMonster: null,
    questionList: null,
})

export function MonsterContextProvider({children}: {children: ReactNode}){
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [playerMonster, setPlayerMonster] = useState<Monster | null>(null);
    const [rivalMonster, setRivalMonster] = useState<Monster | null>(null);
    const [questionList, setQuestionList] = useState<QuestionList | null>(null);

    const monstersCount = 1;
    
    // useEffect(()=>{
    //     console.log("Use effect for monster list")
    //     //console.log(monsters);
    //     fetch('/api/getMonster')
    //     .then(response => response.json()) //this runs the promise and sets the data only once we recieve it
    //     .then(json => setMonsters([json.monsters]))
    //     .catch(error => console.error(error));

    //     // getMonsters(monstersCount).then((r)=>setMonsters(r));
    // },[])

    useEffect(()=>{
        getMonster(setPlayerMonster);
        getMonster(setRivalMonster);
        // getMonsters(monstersCount).then((r)=>setMonsters(r));
    },[])

    function getMonster(setMonster: Function){
        //console.log(monsters);
        fetch('/api/getMonster')
        .then(response => response.json()) //this runs the promise and sets the data only once we recieve it
        .then(json => setMonster(json.monster))
        .catch(error => console.error(error));

    }

    useEffect(()=>{
        console.log("Use effect for question list monster")
        //console.log(monsters);
        fetch('/api/getQuestion')
        .then(response => response.json()) //this runs the promise and sets the data only once we recieve it
        .then(json => setQuestionList(json.questionList))
        .catch(error => console.error(error));

        // getMonsters(monstersCount).then((r)=>setMonsters(r));
    },[])

//coming back with API handler should not return a value
    // useEffect(()=>{
    //     console.log("Use effect for question context")
    //     console.log(questionList.toString());
    //     fetch('/api/getQuestion')
    //     .then(response => response.json()) //this runs the promise and sets the data only once we recieve it
    //     .then(json => setMonsters(json.questionList))
    //     .catch(error => console.error(error));
    // },[])

    return (
        <MonsterContext.Provider value={{monsters: monsters, playerMonster: playerMonster, rivalMonster: rivalMonster, questionList: questionList }}>
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