console.log(" ");
console.log("Task 3!");
console.log(" ");

function filterArray(numbers, value) {
    const filteredArray = [];

    // 1 variant

    for (const elem of numbers) {
        if (elem > value) {
            filteredArray.push(elem);
        }
    }

    // 2 variant

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > value) {
    //         filteredArray.push(numbers[i]);
    //     }
    // }

    return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
