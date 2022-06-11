//Create an a class and extend it - Can be anything you would like it to be!

class Student{
    constructor(name){
        this.name = name
    }
    answer (){
        console.log(`My answer is 2`)
    }
}

class EightGrader extends Student{
    constructor(name,age){
        super(name)
        this.age = age
    }
}

let mathClass = new EightGrader(`Mike`,18)
console.log(mathClass);
