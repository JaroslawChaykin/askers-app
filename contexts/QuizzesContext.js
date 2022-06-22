import React, { createContext, useState } from 'react';

const QuizzesContext = createContext()

export function QuizzesProvider ({children}) {
    const quizzes = QuizzesReducer()
    return <QuizzesContext.Provider value={quizzes}>{children}</QuizzesContext.Provider>
}

function QuizzesReducer() {
    const [quizzes, setQuizzes] = useState([]);

    const setQuizzesFromResolve = (arr) => {
      setQuizzes(arr)
    }
    const addQuiz = (item) => {
        setQuizzes([...quizzes, item])
    }
    return {
        quizzes,
        setQuizzesFromResolve,
        addQuiz
    }
}

export default QuizzesContext