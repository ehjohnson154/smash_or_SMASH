import { Monster } from "@/types/monster";
import { NextApiRequest, NextApiResponse } from "next"
import { delay } from "../../assets/delay";

// const dogImageApi = "https://dog.ceo/api/breeds/image/random";
// const catImageApi = "https://api.thecatapi.com/v1/images/search";
// const nameApi = "https://randomuser.me/api/";

const allMonsterAPI = "https://www.dnd5eapi.co/api/monsters"
const indexMonsterAPI = "https://www.dnd5eapi.co/api/monsters/"
const blankPicture = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<{monsters: Monster[]}>
//   ) {
//     const monsterArray: Monster[] = await getMonsters(1);

//     console.log(monsterArray)
//     res.status(200).json({ monsters: monsterArray })
//   }

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{monster: Monster}>
  ) {
    const monsterArray: Monster[] = await getMonsters(1);

    console.log(monsterArray)
    res.status(200).json({ monster: monsterArray[0] })
  }



//returns json data of all monsters
export async function getAllMonster(){
    console.log("get all monster")
    const allMonsterResponse = await fetch(allMonsterAPI);
    const allMonsterJson = await allMonsterResponse.json();
    return allMonsterJson
}

export async function getRandomMonster(){
    console.log("get random monster")
    const jsonMonsterList = await getAllMonster();
    //console.log(jsonMonsterList)
    const monsterListCount = await jsonMonsterList.count;
    const randInt = getRandomInt(monsterListCount)
    const randomMonster = jsonMonsterList.results[randInt].index
    console.log(randomMonster)

    const IndexMonsterResponse = await fetch((indexMonsterAPI + randomMonster));
    const IndexMonsterJson = await IndexMonsterResponse.json();
    var monsterImage =  null;
    if (IndexMonsterJson.image != null){
        monsterImage = "https://www.dnd5eapi.co" + IndexMonsterJson.image
    }

    

    const monster: Monster = {
        index: IndexMonsterJson.index,
        name: IndexMonsterJson.name,
        size: IndexMonsterJson.size,
        type: IndexMonsterJson.type,
        alignment: IndexMonsterJson.alignment,
        cr: IndexMonsterJson.challenge_rating,
        image: monsterImage ?? blankPicture
    }
    
    return monster;
}

export async function getMonsters(monsterCount: number){
    console.log("get random monster")
    const monsters: Monster[] = [];

    for (let i = 0; i < monsterCount; i++){
        monsters.push(await getRandomMonster());
        await delay(100);
    }
    return monsters;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }