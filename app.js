console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name,pets,residence,hobbies){
        this.name = name;
        this.pets = pets;
        this.residence=residence;
        this.hobbies=hobbies;
        }
        addHobby(hobby){
        this.hobbies.push(hobby);
        }

        removeHobby(hobby){
            this.hobbies=this.hobbies.filter((element,index,array)=>{
                if(element==hobby){
                    return false;
                }else {return true};
            });
        }

        greeting(){
            console.log("Hello fellow person!");
        }      
    
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person{
    constructor(name,pets,residence,hobbies) {
    super(name,pets,residence,hobbies);

    this.occupation = "Full stack Web Developer";
  
    }
    greeting(){
        console.log("Hello fellow person! I'll teach you how to code")
    }
  }


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
const test=new Person("Patrick",3,"Santa Barbara",["hiking","board games","coffee"]);
console.log(test);
test.removeHobby("hiking");
test.addHobby("chilling");
console.log(test);

const coderGuy=new Coder("Pat",1,"SB",["coding","debugging"]);
coderGuy.greeting();
console.log(coderGuy);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{
    constructor(){
        this.result=0;
    }

    add(a,b){
        if (b!=undefined){
       this.result = a+b;
        }else {
            this.result+=a;
        }
       return this.result;

    }
    subtract(a,b){
         if (b!=undefined){
       this.result = a-b;
        }else {
            this.result-=a;
        }
       return this.result;
    }
    multiply(a,b){
         if (b!=undefined){
       this.result = a*b;
        }else {
            this.result*=a;
        }
       return this.result;
    }
    divide(a,b){
         if (b!=undefined){
       this.result = a/b;
        }else {
            this.result/=a;
        }
       return this.result;
    }
    displayResult(){
        console.log(`The current result is: ${this.result}`);
    }
}

const myCalculator= new Calculator();
myCalculator.displayResult();
console.log(myCalculator.result);
console.log(myCalculator.add(2,4));
console.log(myCalculator.add(2,0));
console.log(myCalculator.add(2));
console.log(myCalculator.subtract(9,4));
console.log(myCalculator.multiply(6,3));
console.log(myCalculator.divide(10,2));
