export class Question {
    id: number;
    firstNum: number;
    secondNum: number;
    result: number;
    userResult: string;
    isCorrect: Boolean;
    alreadyAnswered: Boolean;

    constructor(index: number, first: number, second: number) {
        this.id = index;
        this.firstNum = first;
        this.secondNum = second;
        this.result = first * second;
        this.isCorrect = false;
        this.alreadyAnswered = false;

    }
}
