// function Employee(name,age,basicSal){
//     this.name=name;
//     this.age=age;
//     this.basicSal=basicSal;
//     this.bonus=3000;
//     this.calfinalSal=function(){
//         finalSal= this.basicSal+this.bonus;
//         console.log(`Final salary is ${finalSal}`);
//     }
//     this.displayInfo=function(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
// }

// const empPankaj= new Employee('Pankaj',30,20000);
// empPankaj.displayInfo();
// empPankaj.calfinalSal();

//----------------------------------------//


// function extend(Child,Parent){
//     Child.prototype=Object.create(Parent.prototype);
//     Child.prototype.constructor=Child;
// }

// function Shape(color){

// }

// Shape.prototype.area=function(){
//     console.log("Shape not defined.");
// }

// function Rectangle(length,breadth){
//     this.length=length;
//     this.breadth=breadth;
// }


// extend(Rectangle,Shape);

// Rectangle.prototype.area=function(){
//     console.log("In reactangle");
//     console.log(`The area is ${this.length+this.breadth}`);
// }



// function Circle(radius){
//     this.radius=radius;
// }



// extend(Circle,Shape);

// Circle.prototype.area=function(){
//     console.log("In circle");
//     console.log(`The area is ${3.14*this.radius*this.radius}`);
// }



// let Shapes =[
//     new Rectangle(5,6),
//     new Circle(7),
//     new Circle(8),
//     new Rectangle(51,61)
// ]

// for(let Shape of Shapes){
//     console.log("Shape",Shape);
//     Shape.area()
//     //Shape.area()
// }
// Shape.area()
// Shape.area()



const canEat = {
    eat(){
        this.energy++;
        console.log("Eating now......");
    }
}

const canWalk = {
    walk(){
        this.energy--;
        console.log("Walking now......");
    }
}

const canSwim = {
    swim(){
        this.energy--;
        console.log("Swimming now......");
    }
}

function Person(energy){
    this.energy=energy;
}

Object.assign(Person.prototype,canEat,canWalk);


const person = new Person(5);
console.log(person);
// person.canWalk();
// person.canWalk();
// person.canEat();