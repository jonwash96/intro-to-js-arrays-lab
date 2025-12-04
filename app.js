export function run(ex,params) {
    ex ?? process.argv[2]; // string
    params ?? process.argv[3]; // object
}

// print('ex',{title:"", desc:null, input:, func:, proto:});

// EXERCISE 1
const foods = [];
print('ex1',{title:"Empty Array", desc:"Create an empty array called fods", input:"none", func:foods, proto:foods.constructor.name})

// EXERCISE 2
foods.push("pizza", "cheeseburger");
print('ex2',{title:"Add strings to the array" , desc:null, input:"pizza, cheeseburger", func:foods, proto:JSON.stringify(foods)});

// EXERCISE 3
foods.unshift("taco");
print('ex3',{title:"Insert at the beginning", desc:null, input:"taco", func:foods, proto:JSON.stringify(foods)});

// EXERCISE 4
const favFood = foods[1];
print('ex2',{title:"Access an array element" , desc:null, input:null, func:favFood, proto:JSON.stringify(favFood)});

// EXERCISE 4 v2
const favFood2 = foods[foods.indexOf("pizza")];
print('ex4v2',{title:"Dynamically Access an array element" , desc:null, input:null, func:favFood2, proto:`const favFood = foods[foods.indexOf("pizza")]`});

// EXERCISE 5
foods.splice(2,0,"tofu");
print('ex5',{title:"Insert an element between two others" , desc:null, input:"tofu", func:foods, proto:`foods.splice(2,0,"tofu")`});

// EXERCISE 5 v2
foods.splice(foods[foods.indexOf('pizza')+1],0,"tofu");
print('ex5v2',{title:"Dynamically Insert an element between two others" , desc:null, input:"tofu", func:foods, proto:`foods.splice(foods[foods.indexOf('pizza')+1],0,"tofu")`});

// EXERCISE 6
foods.splice(1,1,"sushi","cupcake");
print('ex6',{title:"Replace elements", desc:"Replace 'pizza' in the <em>foods</em> array with 'sushi' and 'cupcake'.", input:"sushi, cupcake", func:foods, proto:`foods.splice(1,1,"sushi","cupcake")`});

// EXERCISE 7
const yummy = foods.slice(1,2);
print('ex7',{title:"Using the <em>slice()</em> method", desc:"Use the <em>slice()</em> method to create a new array that contains 'sushi' and 'cupcake'.", input:null, func:yummy, proto:`const yummy = foods.slice(1,2)`});

// EXERCISE 8
const soyIdx = foods.indexOf('tofu');
print('ex8',{title:"Finding an index", desc:"1) Using the <em>indexOf()</em> method, find the index of the string 'tofu' in the <em>foods</em> array.<br>2) Assign it to a variable named <em>soyIdx</em>.", input:"tofu", func:soyIdx, proto:`const soyIdx = foods.indexOf('tofu')`});

// EXERCISE 9
const allFoods = foods.join(' -> ');
print('ex9',{title:"", desc:null, input:"", func:allFoods, proto:`const allFoods = foods.join(' -> ')`});

// EXERCISE 10
const hasSoup = foods.includes("soup");
print('ex',{title:"", desc:null, input:"", func:hasSoup, proto:`const hasSoup = foods.includes("soup")`});

// EXERCISE 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for (let num of nums) {num % 2!==0 && odds.push(num)};
print('ex11',{title:"", desc:null, input:nums, func:odds, proto:`for (let num of nums) {num % 2!==0 && odds.push(num)}`});

// EXERCISE 11 v2
const odds2 = nums.filter(num=>num % 2!==0);
print('ex11v2',{title:"", desc:null, input:nums, func:odds2, proto:`const odds2 = nums.filter(num=>num % 2!==0)`});

// EXERCISE 12
const fizz = []; // numbers evenly divisable by 3
const buzz = []; // numbers evenly divisable by 5
const fizzBuzz = []; // numbers evenly divisable by 3 & 5
for (let num of nums) {
    if (num % 3 === 0) fizz.push(num);
    if (num % 5 === 0) buzz.push(num);
    if (num % 3 === 0 && num % 5 === 0) fizzBuzz.push(num);
};
print('ex12',{title:"", desc:null, input:nums, func:JSON.stringify({fizz,buzz,fizzBuzz}), proto:`for (let num of nums) {<br>&nbsp;&nbsp;if (num % 3 === 0) fizz.push(num);<br>&nbsp;&nbsp;if (num % 5 === 0) buzz.push(num);<br>&nbsp;&nbsp;if (num % 3 === 0 && num % 5 === 0) fizzBuzz.push(num);<br>}`});

// EXERCISE 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length -1];
print('ex13',{title:"", desc:null, input:numArrays, func:numList, proto:`const numList = numArrays[numArrays.length -1]`});

// EXERCISE 14
const num = numArrays.map(arr=>arr.filter(el=>el===66)).join();
print('ex14',{title:"", desc:null, input:numArrays, func:num, proto:`const num = numArrays.map(arr=>arr.filter(el=>el===66)).join()`});

// EXERCISE 14 v2
const num2 = numArrays.flat(1)[numArrays.flat(1).indexOf(66)];
print('ex14v2',{title:"", desc:null, input:numArrays, func:num2, proto:`const num2 = numArrays.flat(1)[numArrays.flat(1).indexOf(66)]`});

// EXERCISE 15-A
const sumA = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0));
print('ex15-A',{title:"", desc:null, input:numArrays, func:sumA, proto:`const sumA = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0))`});

// EXERCISE 15-B
const sumB = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0);
print('ex15-B',{title:"", desc:null, input:numArrays, func:sumB, proto:`const sumB = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0)`});

// EXERCISE 15-C
const sumC = numArrays.flat(1).reduce((a,c)=>a+c,0);
print('ex15-C',{title:"", desc:null, input:numArrays, func:sumC, proto:`const sumC = numArrays.flat(1).reduce((a,c)=>a+c,0)`});

function print(ex,obj) {
    console.log(`Exercise ${ex.replace('ex','')} Result: ${obj.func}`);
}