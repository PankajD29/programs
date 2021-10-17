class Animal{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log(`${this.name} eats food`);
    }
}

class dog extends Animal{
    constructor(name){
        super(name);
    }
    eats(){
        console.log(`${this.name} eats bones`);
    }
}

class cat extends Animal{
    constructor(name){
        super(name);
    }
    eats(){
        console.log(`${this.name} eats mouse`);
    }
}


let Animals=[
    new dog('Tommy'),
    new cat('Munny')
]

for(let animaltype of Animals)
animaltype.eats();
//animaltype.eats();
// const tommy = new dog('Tommy');
// const munny = new cat('Munny');
// tommy.eats();
// munny.eats();