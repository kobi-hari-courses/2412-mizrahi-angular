import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialQuizSlice, QuizSlice } from './quiz.slice';
import { computed, effect, inject } from '@angular/core';
import { getCorrectCount } from './quiz.helpers';
import { answerCurrentQuestion, resetQuestions } from './quiz.updaters';
import { ColorQuizGeneratorService } from '../services/color-quiz-generator.service';
import { withLocalStorage } from '../custom-features/with-local-storage';

export const QuizStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialQuizSlice),
  withProps(store => ({
    _generator: inject(ColorQuizGeneratorService)
  })), 
  withComputed(store => {
    const currentQuestionIndex = computed(() => store.answers().length);
    return {
        currentQuestionIndex: currentQuestionIndex, 
        currentQuestion: computed(() => store.questions()[currentQuestionIndex()]), 
        totalQuestions: computed(() => store.questions().length),
        isQuizDone: computed(() => store.answers().length === store.questions().length), 
        correctCount: computed(() => getCorrectCount(store.questions(), store.answers()))
    }
  }), 
  withMethods(store => ({
    answerCurrentQuestion: (index: number) => 
        patchState(store, answerCurrentQuestion(index)), 
    reset: () => patchState(store, initialQuizSlice ), 
    generateNewQuiz: () => {
      const questions = store._generator.createRandomQuiz();
      patchState(store, resetQuestions(questions));
    }
  })), 
  withLocalStorage('exam')
);
