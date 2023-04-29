// 1
for(let i = 5; i < 100; i++ ){
    console.log(i);
}

// 2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(let i = 0; i < array1.length; i++){
    array1[i] > 0 && array1[i] < 10 ? console.log(array1[i]) : '';
}

// 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < array2.length; i++){
    if (array2[i] === 5) {
        console.log(array2[i]);
        break;
    }
}

// 4
let array3 = [1, 2, 3, 4, 5];
let sumOfArray3 = 0;
for(let i = 0; i < array3.length; i++){
    sumOfArray3 += array3[i];
}
console.log(sumOfArray3);

// 5
let array4 = [1, 2, 3, 7, 6, 9];
let sumOfArray4 = 0;
for(let i = 0; i < array4.length; i++){
    sumOfArray4 += array4[i];
}
let average = sumOfArray4 / array4.length;
console.log(average);

// 6
let array5 = [1, 2, 3, 7, 6, 9];

for ( num of array5 ) {
    num !== 7 ? console.log(num) : '';
}

// 7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
  
console.log(user.studentstatus);

// 8 
let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if ( user1.studentstatus === 'active' || user1.age < 25 ) {
    if ( user1.age < 18 && user1.studentstatus === 'active' ) {
        if ( user1.name === 'Levani' ) {
            console.log("Hello Levani");
        } else {
            console.log("Hello");
        }
    } else {
        console.log("Hello World");
    }
} else {
    console.log("error")
}

// 9
let array6 = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
];

for ( let  i = 0; i < array6.length; i++ ) {
    for( let j = 0; j < array6[i].length; j++ ) {
        array6[i][j] > 0 ? console.log(array6[i][j]) : ''
    }
}

// 10
let array7 = [ 2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10 ];
let oddNumbers = array7.filter(num => num % 2 !== 0 );
let evenNumbers = array7.filter(num => num % 2 === 0 );
console.log(oddNumbers);
console.log(evenNumbers);