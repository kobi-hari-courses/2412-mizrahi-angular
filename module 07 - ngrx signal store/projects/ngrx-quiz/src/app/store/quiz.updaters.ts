import { PartialStateUpdater } from "@ngrx/signals";
import { QuizSlice } from "./quiz.slice";
import { Question } from "../models/question.model";

export function answerCurrentQuestion(index: number): PartialStateUpdater<QuizSlice> {
    return state => ({
        answers: [...state.answers, index]
    })
}

export function resetQuestions(questions: Question[]): PartialStateUpdater<QuizSlice> {
    return _ => ({
        questions,
        answers: []
    })
}