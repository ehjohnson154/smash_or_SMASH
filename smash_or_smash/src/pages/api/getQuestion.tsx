import { QuestionList } from "@/types/questionList"


const questions = [
    ["How likely are you to raid the local village?"],
    ["How afraid of spiders are you?"],
    ["Ice cream?"],
    ["Question 4"],
    ["Question 5"]
]


export async function getRandomQuestion(){
    const randQuestion = await questions[getRandomInt(questions.length)]
    return await getRandomQuestion
}

export async function getQuestionList(){
    const question0 = getRandomQuestion()

    const makeQuestions: QuestionList = {
        question0: question0
    }

    return makeQuestions
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }