// function myFunction(abc){
//     console.log('hi')
//     abc()
// }

// function myFunction2(){
//     console.log('bye')
// }




// myFunction(myFunction2);
  



// var numbers = [1,2,3,4,5,6,7,8,9,10,12,34,10,6];
// var newNumbers = numbers.filter((val)=> val >= 3 && val < 12).map((num)=> num*5)
// console.log(newNumbers)



// var names = ["ali","bilal","fahad", 'rizwan'];
// var fulNames = names.map((item)=>`${item.toString().slice(0,1).toUpperCase()}${item.toString().slice(1).toLowerCase()} Ahmed`)
// console.log(fulNames);

// var selectedNum = numbers.filter((val)=>{
//     return val >= 2 && val < 34;
// })
// console.log(selectedNum);

// var findNum = numbers.find((val)=> val > 5);
// console.log(findNum)

// var forEachVal = numbers.forEach((val, indx)=> console.log((val * 3) + " ==>> " + indx))

// var from = Array.from(names[1]);
// console.log(from)

// console.log(numbers.reverse())

//-----------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------------//

//Question # 01

//Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.

// function targetNumber(arr, num){
//     let visitedNum = {}
//     for(i = 0; i < arr.length; i++){
//         let currentNumber = arr[i]
//         if(visitedNum[num - currentNumber]){
//             return [num - currentNumber, currentNumber]
//         }
//         visitedNum = true
//     }
//     return null
// }

// console.log(targetNumber([1,2,3,4],5))

//--------------------------------------------------------------------------------------------------------------------------------///

//Question 2

//Write a function that takes a string as input and returns the reverse of the string.

// function reverseString(string){
//     let revString = ""
//     for(i = string.length - 1; i>=0; i--){
//         revString = revString + string[i]
//     }
//     return revString
// }

// console.log(reverseString("qwerty"))

//--------------------------------------------------------------------------------------------------------------------------------//

//Question 3


// Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

// function sumOfTwoLargestNum(arr){ 
//     let currentNumber
//     let largeNumber = arr[0]
//     let secondLarge = arr[1]
//     for(i = 2; i<arr.length; i++){
//         currentNumber = arr[i]
//         // console.log(currentNumber)
//         if(currentNumber > largeNumber){
//             secondLarge = largeNumber
//             largeNumber = currentNumber
//         } else if(currentNumber > secondLarge){
//             secondLarge = currentNumber
//         }
//     }
//     return largeNumber + secondLarge

// }

// const number = [1,3,5,4,6,10]
// console.log(sumOfTwoLargestNum(number))

//-------------------------------------------------------------------------------------------------------------------------------//

