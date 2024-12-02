// // function Player(nickname){
// //     this.nickname = nickname
// //     this.playedMatch = 0
// // }

// // Player.prototype.play = 
// // function(){
// //     this.playedMatch++
// //     console.log(this.nickname,this.playedMatch)
// // }

// // Player.prototype.getTierLevel = function(){
// //     if(this.playedMatch >= 0 && this.playedMatch <= 3){
// //         return 'A'
// //     }else if(this.playedMatch >= 4 && this.playedMatch <= 6){
// //         return 'B'
// //     }else{
// //         return 'C'
// //     }

// // }

// class Player {
//     constructor(nickname) {
//         this.nickname = nickname
//         this.playedMatch = 0
//     }

//     play() {
//         this.playedMatch++
//         console.log(this.nickname, this.playedMatch)
//     }

//     getTierLevel() {
//         if (this.playedMatch >= 0 && this.playedMatch <= 3) {
//             return 'A'
//         } else if (this.playedMatch >= 4 && this.playedMatch <= 6) {
//             return 'B'
//         } else {
//             return 'C'
//         }
//     }
// }


// const gomszab = new Player("gomszab")
// console.log(gomszab);
// gomszab.play();
// console.log(gomszab.getTierLevel());



// function Person(name){
//     this.name = name || "Géza";
// }

// Person.prototype.getName = function(){
//     return this.name;
// };

// function Student(name, school){
//     Person.call(this, name)
//     this.school = school;
// }

// Object.setPrototypeOf(Student.prototype, Person.prototype);

class Person {
    constructor(name = "Géza") {
        this.name = name;
    }   

    getName(){
        return this.name;
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
}

const student = new Student("Géza", "Bolyai")
console.log(student.getName());
console.log(student.school);


class Animal {
    constructor(name){
       this.name = name  
    }

    hang(){
        console.log("Hangot ad ki");
    }
}

class Bird extends Animal{
    repul(){
        console.log("A madár repül");
    }
}

class Mammal extends Animal{
    seta(){
        console.log("Az emlős sétál");
    }
}