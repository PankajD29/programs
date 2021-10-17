class square{
    constructor(num){
        this.num=num;
    }
    sq(){
        return this.num**2;
    }
}


let numsq=new square(5);
console.log(numsq.sq());


//static class

class Math2{
    //static #count = 0
    static abs(value){
        if (value<0) {
            return -(value);
        }
        else{
            return value;
        }
    }
}

console.log(Math2.abs(-23));
// console.log(Math2.#count);



class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    gethobby(){
        console.log("Hobby not defined");
    }
}

person.prototype.details=function(){
    console.log(`Name:- ${this.name} Age:- ${this.age}`);
}

class pankaj extends person{
constructor(name,age,hobby){
    super(name,age);
    this.hobby=hobby
    }
    gethobby(){
        super.gethobby();
        console.log("Pankaj's Hobby is "+this.hobby);
    }
}

const pankajD= new pankaj('Pankaj Dhumal',30,'reading');
console.log(pankajD.details());
console.log(pankajD.gethobby());