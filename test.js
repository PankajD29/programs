// let userDetails={
//   firstName:"pankaj",
//   lastName :"Dhumal"
// }
//
// this.setState({
//   ... userDetails,
//   mobile:"4234"
// })

// const printNumbers = (value) => {
//   value++;
//   console.log("value:-",value);
// }
//
// printNumbers();


printNos=(n)=>
    {
        if(n > 0)
        {
            printNos(n - 1);
            console.log(n + " ");
        }
        return;
    }

    printNos(100);


// arrow function
// recursion
// clusters
// postgresql basics
// print 1 to 100 numbers using recursion
//spread operator vs rest operator
