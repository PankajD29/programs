function foo(){
  console.log("In");
  var tmp ='one_two_three_four_five';
  return tmp.replace(/_/g,'+');
}

console.log(foo());
