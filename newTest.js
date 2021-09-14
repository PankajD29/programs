let studentArray = [{
    "name" : "Computer Science",
    "students" : [
        {
            "student_name" : "A"
        },
        {
            "student_name" : "B"
        }
    ]
},
{
    "name" : "Math",
    "students" : [
        {
            "student_name" : "A"
        },
        {
            "student_name" : "B"
        },
        {
            "student_name" : "C"
        }
    ]
}]

const result = Object.values(studentArray.reduce((acc, course) => {
    console.log(studentArray);
    for(let student of course.students) {
        console.log("student:-",student);
        let student_name = student.student_name;
        console.log("student_name:-", student_name);
        acc[student_name ] = acc[student_name ] || { student_name , courses: []};
        console.log("Before_acc:-",acc);
        console.log("course",course);
        acc[student_name ].courses.push(course.name);
        console.log("After_acc:-",acc);
    }
    console.log("final_acc:-",acc);
    return acc;
}, {}))

console.log(result)
// const newArr = [];

// studentArray.forEach((c) => {
//   c.students.forEach((s) => {
//     let studentIndex = newArr.findIndex(el => el.student_name === s.student_name);
//     studentIndex === -1 ? newArr.push({
//       student_name: s.student_name,
//       courses: [c.name]
//     }) : newArr[studentIndex].courses.push(c.name)
//   })
// })

// console.log(newArr);


// studentArray.forEach((item,index) => {
//   //console.log(item);
//   if (index > 0) {
//         console.log("Previous: " + studentArray[index - 1].students);
//     }
//     if (index < studentArray.length - 1) {
//         console.log("Next: " + studentArray[index + 1].students);
//     }
//   //console.log(studentArray);
//   //console.log(item.students.filter(comparer(item.students)));
// });



// // a = [{ value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer"}, { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed"}, { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi"}, { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal"},  { value:"a63a6f77-c637-454e-abf2-dfb9b543af6c", display:"Ryan"}]
// // b = [{ value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer", $$hashKey:"008"}, { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed", $$hashKey:"009"}, { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi", $$hashKey:"00A"}, { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal", $$hashKey:"00B"}]

// function comparer(otherArray){
//   return function(current){
//     return otherArray.filter(function(other){
//       return other.value == current.value && other.display == current.display
//     }).length == 0;
//   }
// }

// var onlyInA = a.filter(comparer(b));
// var onlyInB = b.filter(comparer(a));
//
// result = onlyInA.concat(onlyInB);
//
// console.log(result);


// [
// 	{
// 		"student_name" : "A",
// 		"courses": ["Computer Science", "Math"]
// 	},
// 	{
// 		"student_name" : "B",
// 		"courses": ["Computer Science", "Math"]
// 	},
// 	{
// 		"student_name" : "C",
// 		"courses": ["Math"]
// 	}
// ]

//db.collection.find({})
