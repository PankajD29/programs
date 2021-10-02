let sTest = "age - 25, birth date 01/01/1995";
let iCount = 0;
for (iIndex of sTest) {
    if (!isNaN(parseInt(iIndex))) {
        iCount++;
    }
}
console.log(iCount);
naga padala
