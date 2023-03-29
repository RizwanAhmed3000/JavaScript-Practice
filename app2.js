// function myFunction(abc){
//     console.log('hi')
//     abc()
// }

// function myFunction2(){
//     console.log('bye')
// }




// myFunction(myFunction2);
  



var numbers = [1,2,3,4,5,6,7,8,9,10,12,34,10,6];
var newNumbers = numbers.filter((val)=> val >= 3 && val < 12).map((num)=> num*5)
console.log(newNumbers)



var names = ["ali","bilal","fahad", 'rizwan'];
var fulNames = names.map((item)=>`${item.toString().slice(0,1).toUpperCase()}${item.toString().slice(1).toLowerCase()} Ahmed`)
console.log(fulNames);

var selectedNum = numbers.filter((val)=>{
    return val >= 2 && val < 34;
})
console.log(selectedNum);

var findNum = numbers.find((val)=> val > 5);
console.log(findNum)

var forEachVal = numbers.forEach((val, indx)=> console.log((val * 3) + " ==>> " + indx))
