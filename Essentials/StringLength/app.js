let arr1 = 'chocolate';
let arr2 = 'ice cream';
let arr3 = 'cake';


solve(arr1, arr2, arr3);


function solve(arr1, arr2, arr3) {
    let sumLength;
    let averageLength;

    let firstArgLength = arr1.length;
    let secondArgLength = arr2.length;
    let thirdArgLength = arr3.length;

    sumLength = firstArgLength + secondArgLength + thirdArgLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}
