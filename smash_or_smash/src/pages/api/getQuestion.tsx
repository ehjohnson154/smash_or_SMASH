import { QuestionList } from "@/types/questionList"
import { NextApiRequest, NextApiResponse } from "next"
import { delay } from "../../assets/delay";

const questions = [
    ["How likely are you to raid the local village?"],
    ["How afraid of spiders are you?"],
    ["Ice cream?"],
    ["Light or Dark?"],
    ["?"]
]


//DO i need a handler for a internal api?
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{questionList: QuestionList}>
  ) {
    const questionList: QuestionList = getQuestionList();

    console.log(questionList)
    res.status(200).json({ questionList: questionList })
  }



export function getRandomQuestion(){
    const randQuestion = questions[getRandomInt(questions.length)];
    return randQuestion
}

export function getQuestionList(){
    console.log("get question list");
    const question0 = getRandomQuestion()[0];
    console.log(question0)

    const makeQuestions: QuestionList = {
        question0: getRandomQuestion()[0],
        question1: getRandomQuestion()[0],
        question2: getRandomQuestion()[0],
        question3: getRandomQuestion()[0],
        question4: getRandomQuestion()[0],
    }
    console.log(makeQuestions.toString());
    console.log(makeQuestions["question0"]);
    return makeQuestions
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }