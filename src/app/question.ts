export class Question {
    id: number;
    firstNum: number;
    secondNum: number;
    result: number;
    userResult: string;
    isCorrect: Boolean;
    alreadyAnswered: Boolean;
    operation: string;

    constructor(index: number, first: number, second: number, operation: string) {
        this.id = index;
        this.firstNum = first;
        this.secondNum = second;
        this.operation = operation;
        this.result = this.calcResult(first, second, operation);
        this.isCorrect = false;
        this.alreadyAnswered = false;
    }
    calcResult(num1, num2, op) {
        if (op == '*') {
            return num1 * num2;
        }
        if (op == '-') {
            return num1 - num2;
        }
        if (op == '+') {
            return num1 + num2;
        }
        if (op == '/') {
            if (num2 == 0) return 0;
            return num1 / num2;
        }
    }
}
