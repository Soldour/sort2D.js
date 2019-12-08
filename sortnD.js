/* 
 1. creat a function that can convert 2D to 1D
 2. take the converted array to the function "indMinIndex" and return the index 
 3. pass the value to swap fnction and arrange the values to in increading order
 4. her we will get the arranged one dimentional array 
 5. convert the array to two dimentional array again 
*/
function swap(a, firsIndex, secondIndex) { //swap funciton 

    let tmp = a[firsIndex]
    a[firsIndex] = a[secondIndex]

    a[secondIndex] = tmp
}

function findMinIndex(a, startIndex) {    // fin the index of minimum value 
    let minValue = a[startIndex]
    let minIndex = startIndex
    for (let i = startIndex + 1; i < a.length; i++) {
        if (a[i] < minValue) {
            minValue = a[i]
            minIndex = i
        }
    }
    return minIndex               // return the minimum index
}

let a = [[-3, 14, 45, 13],
[-4, 1, 19, -20],
[9, 6, 0, 21]]
let temp = [];
console.table(a)

for (let i = 0; i < a.length; i++) { //the .concat(a[i]) function will convert
    temp = temp.concat(a[i]);        // the two dimensional arry to one dimensional
}

///////////////////////////////////////////////////
for (let i = 0; i < temp.length; i++) {     //find the minimum index from the 1d array
    let secondIndex = findMinIndex(temp, i) // call the swap function and pass the values 
    swap(temp, i, secondIndex)
}
console.log(temp)

////////////////////////////////////////////////////
let converted_twoD = [];      // take the converted One dimensionalarr and pass the elements here 
while (temp.length) converted_twoD.push(temp.splice(0, a[0].length));

console.table(converted_twoD)
