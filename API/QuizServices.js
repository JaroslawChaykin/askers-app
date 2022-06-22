import axios from 'axios';
import { HOST } from './HOST';

export class QuizServices {
    static async getQuizzes() {
        const res = await axios.get(HOST + '/quizzes')
        return res.data
    }
    static async getQuiz(id) {
        const res = await axios.get(HOST + `/quizzes/${id}`)
        return res.data
    }
}