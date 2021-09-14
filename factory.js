class Developer{
    constructor(name){
        this.name=name
        this.type='Developer'
    }
  
}

function developerFactoy(name){
    return new Developer(name)
}


console.log(developerFactoy('pankaj'));

//function Tester(name)