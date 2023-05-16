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

//Question 4

//Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.

// function filteredString(arr){
//    var filteredArray =  arr.filter((item)=>{
//     return item.length > 3
// })
// console.log(filteredArray)
// }

// const arr = ["hi", "hello", "hey", "howdy",'asd']
// filteredString(arr)

//-------------------------------------------------------------------------------------------------------------------------//

//Question 5

// Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

// const numbers = [1,2,3,4,5,6,7,8,9,10,88]

// let filteredArray = numbers.filter((num)=>{
//     return num % 2 === 0
// })

// console.log(filteredArray)

//----------------------------------------------------------------------------------------------------------------------//

//Question 6

// let arrayOfObj = [{name: "John", age: 30}, {name: "Jane", age: 25}]

// function returnKeyValue(arr, key){
//     let filteredArray = arr.map((item)=>{
//         return item[key]
//     })
//     console.log(filteredArray)
// }

// returnKeyValue(arrayOfObj, "name")

//--------------------------------------------------------------------------------------------------------------------//

//Question 7

// Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

// function isPlaindrome(value){
//     let reverseString = ""
//     for(i = value.length - 1; i >= 0; i--){
//         reverseString = reverseString + value[i]
//     }
//     if(reverseString === value){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// let string = "racecar"
// isPlaindrome(string)

//----------------------------------------------------------------------------------------------//

//Question 8

// Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.

// let string = ["hi", "hello", "hey", "howdy"]

// function stringLength(arr) {
//     let strLength = arr.map((str) => {
//         return str.length
//     })
//     console.log(strLength)
// }

// stringLength(string)

//----------------------------------------------------------------------------------------------------//

//Question 9

//Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.

// let numbers = [1, 5,3, 15, 20]

// function firstGreater(arr){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > 10){
//             return i
//         }
//     }
// }

// console.log(firstGreater(numbers))

//---------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-----------------------------------------------//

