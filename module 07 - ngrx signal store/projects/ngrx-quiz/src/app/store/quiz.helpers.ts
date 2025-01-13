import { Question } from "../models/question.model";
import { QuizSlice } from "./quiz.slice";

export function getCorrectCount(questions: Question[], answers: number[]): number {
    let res = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === questions[i].correctIndex) {
            res++;
        }
    }
    return res;
}