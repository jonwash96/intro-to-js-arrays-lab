console.log("Script is loaded");

// print('ex',{title:"", desc:null, input:, func:, proto:});

// EXERCISE 1
const foods = [];
print('ex1',{title:"Define an empty array", desc:"Create an empty array and assign it to a variable called <em>foods</em>.<br><em>Example only; Completed for me</em>", input:"none", func:foods, proto:foods.constructor.name})

// EXERCISE 2
foods.push("pizza", "cheeseburger");
print('ex2',{title:"Add strings to the array" , desc:"1) Add 'pizza' and 'cheeseburger' to the <em>foods<em> array. ", input:"pizza, cheeseburger", func:foods, proto:`foods.push("pizza", "cheeseburger");`});

// EXERCISE 3
foods.unshift("taco");
print('ex3',{title:"Insert at the beginning", desc:"1) Insert the string 'taco' at the beginning of the <em>foods</em> array.", input:"taco", func:foods, proto:`foods.unshift("taco")`});

// EXERCISE 4
const favFood = foods[1];
print('ex4',{title:"Access an array element" , desc:"1) Retrieve the 'pizza' string from the array based on its position (index) in the array.<br>2) Assign it to a variable called <em>favFood</em>.", input:null, func:favFood, proto:`JSON.stringify(favFood)`});

// EXERCISE 4 v2
const favFood2 = foods[foods.indexOf("pizza")];
print('ex4v2',{title:"Dynamically Access an array element" , desc:"This method allows for dynamic discovery of the first instance of an element in the array matching 'pizza'. ", input:"pizza", func:favFood2, proto:`const favFood = foods[foods.indexOf("pizza")]`});

// EXERCISE 5
foods.splice(2,0,"tofu");
print('ex5',{title:"Insert an element between two others" , desc:"1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.", input:"tofu", func:foods, proto:`foods.splice(2,0,"tofu")`});

// EXERCISE 5 v2
foods.splice(foods[foods.indexOf('pizza')+1],0,"tofu");
print('ex5v2',{title:"Dynamically Insert an element between two others" , desc:"1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.", input:"tofu", func:foods, proto:`foods.splice(foods[foods.indexOf('pizza')+1],0,"tofu")`});

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
print('ex9',{title:"Joining elements", desc:"1) Use the <em>join()<em> method to concatenate the strings in the <em>foods</em> array, separated by ' -> '.<br>2) Assign the result to a variable called <em>allFoods</em>. ", input:"->", func:allFoods, proto:`const allFoods = foods.join(' -> ')`});

// EXERCISE 10
const hasSoup = foods.includes("soup");
print('ex10',{title:"Check for an element", desc:"1) Using the .includes() method, check if the <em>foods</em> array contains the string'soup'.<br>2) Assign the result to a variable called <em>hasSoup</em>.", input:"soup", func:hasSoup, proto:`const hasSoup = foods.includes("soup")`});

// EXERCISE 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for (let num of nums) {num % 2!==0 && odds.push(num)};
print('ex11',{title:"Odd numbers from an array", desc:"1) Choose a method to iterate through the <em>nums</em> array.<br>2) Push each odd number to a new array named <em>odds</em>`.", input:nums, func:odds, proto:`for (let num of nums) {num % 2!==0 && odds.push(num)}`});

// EXERCISE 11 v2
const odds2 = nums.filter(num=>num % 2!==0);
print('ex11v2',{title:"Odd numbers from an array", desc:"This method uses the built in Array.filter() method to make a shallow copy, iterate, and perform logic.", input:nums, func:odds2, proto:`const odds2 = nums.filter(num=>num % 2!==0)`});

// EXERCISE 12
const fizz = []; // numbers evenly divisable by 3
const buzz = []; // numbers evenly divisable by 5
const fizzBuzz = []; // numbers evenly divisable by 3 & 5
for (let num of nums) {
    if (num % 3 === 0) fizz.push(num);
    if (num % 5 === 0) buzz.push(num);
    if (num % 3 === 0 && num % 5 === 0) fizzBuzz.push(num);
};
print('ex12',{title:"FizzBuzz with arrays", 
    desc:"1) Choose a method to iterate through the <em>nums</em> array. <br>2. As you loop, sort the numbers into new arrays based on the following rules:<br>&nbsp;&nbsp;- Push any number evenly divisible by 3 to an array called <em>fizz</em>.<br>&nbsp;&nbsp;- Push any number evenly divisible by 5 to an array called <em>buzz</em>.<br>&nbsp;&nbsp;- Push any number that is evenly divisible by 3 and 5 to an array called <em>fizzbuzz</em>.<br>Note: A single number may meet more than one of the above rules. If it does, it should be placed in multiple arrays. For example, the number 15 will appear in the <em>fiz</em>, <em>buzz</em>, and <em>fizzbuzz</em> arrays.", 
    input:nums, func:JSON.stringify({fizz,buzz,fizzBuzz}), proto:`for (let num of nums) {<br>&nbsp;&nbsp;if (num % 3 === 0) fizz.push(num);<br>&nbsp;&nbsp;if (num % 5 === 0) buzz.push(num);<br>&nbsp;&nbsp;if (num % 3 === 0 && num % 5 === 0) fizzBuzz.push(num);<br>}`});

// EXERCISE 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length -1];
print('ex13',{title:"Retrieve the last array", desc:"1) Assign the last nested array in the <em>numArrays</em> below to a variable named <em>numList</em>. As you do this, also fulfill these goals:<br>&nbsp;&nbsp;- Assume you don't know how many nested arrays <em>numArrays</em> contains.<br>&nbsp;&nbsp;- Do not alter the original <em>numArrays</em> array.", input:numArrays, func:numList, proto:`const numList = numArrays[numArrays.length -1]`});

// EXERCISE 14
const num = numArrays.map(arr=>arr.filter(el=>el===66)).join();
print('ex14',{title:"Accessing within nested arrays", desc:"1) Retrieve the number 66 from the <em>numArrays</em> array. As part of this process do not alter the original <em>numArrays</em> array.<br>2) Assign it to a variable called <em>num</em>.", input:numArrays, func:num, proto:`const num = numArrays.map(arr=>arr.filter(el=>el===66)).join()`});

// EXERCISE 14 v2
const num2 = numArrays.flat(1)[numArrays.flat(1).indexOf(66)];
print('ex14v2',{title:"Accessing within nested arrays", desc:"1) Retrieve the number 66 from the <em>numArrays</em> array. As part of this process do not alter the original <em>numArrays</em> array.<br>2) Assign it to a variable called <em>num</em>.", input:numArrays, func:num2, proto:`const num2 = numArrays.flat(1)[numArrays.flat(1).indexOf(66)]`});

// EXERCISE 15-A
const sumA = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0));
print('ex15-A',{title:"Nested array sum", desc:"<em>I'm not sure if it wants a single sum, or sums of each, so I did both.</em><br>1) Use nested loops or <em>forEach()M/em> methods to sum up all numbers within <em>numArrays</em> nested arrays.<br>2) Assign the sum to a variable called <em>total</em>.<br><em>Hint: Be sure to declare and initialize the total variable before the iterations.</em>", input:numArrays, func:sumA, proto:`const sumA = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0))`});

// EXERCISE 15-B
const sumB = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0);
print('ex15-B',{title:"Nested array sum", desc:"<em>I'm not sure if it wants a single sum, or sums of each, so I did both.</em><br>1) Use nested loops or <em>forEach()M/em> methods to sum up all numbers within <em>numArrays</em> nested arrays.<br>2) Assign the sum to a variable called <em>total</em>.<br><em>Hint: Be sure to declare and initialize the total variable before the iterations.</em>", input:numArrays, func:sumB, proto:`const sumB = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0)`});

// EXERCISE 15-C
const sumC = numArrays.flat(1).reduce((a,c)=>a+c,0);
print('ex15-C',{title:"Nested array sum", desc:"<em>I'm not sure if it wants a single sum, or sums of each, so I did both.</em><br>1) Use nested loops or <em>forEach()M/em> methods to sum up all numbers within <em>numArrays</em> nested arrays.<br>2) Assign the sum to a variable called <em>total</em>.<br><em>Hint: Be sure to declare and initialize the total variable before the iterations.</em>", input:numArrays, func:sumC, proto:`const sumC = numArrays.flat(1).reduce((a,c)=>a+c,0)`});


// RENDERING FUNCTIONS

function print(ex,obj) {
    console.log(`Exercise ${ex.replace('ex','')} Result: ${obj.func}`);
    drawCard(ex,obj);
}

function drawCard(ex,obj) {
    try {
        console.log("Draw ", ex)
        const card = document.createElement('div');
            card.id = ex;
            card.classList.add('card');
            const exercise = document.createElement('h2');
            exercise.innerHTML = `Exercise ${ex.replace('ex','')}`;
            card.append(exercise);
        const title = document.createElement('h3');
            title.innerHTML = obj.title;
            card.append(title);
        const descHead = document.createElement('h4');
            descHead.innerHTML = "Description:";
            card.append(descHead);
        const description = document.createElement('p');
            description.innerHTML = obj.desc;
            card.append(description);
        const content = document.createElement('section');
        const inputInfo = document.createElement('p');
            inputInfo.innerHTML = `<span>Input:</span> ${obj.input}`;
            content.append(inputInfo);
        const result = document.createElement('p');
            result.innerHTML = `<span>Result:</span> ${obj.func}`;
            result.classList.add('result');
            result.append(obj.func);
            content.append(result);
        const protoHead = document.createElement('h4');
            protoHead.innerHTML = "My Code:";
            content.append(protoHead);
        const prototype = document.createElement('p');
            prototype.innerHTML = obj.proto;
            content.append(prototype);
    
        card.append(content);
        document.querySelector('body').append(card);
    }
    catch {
        console.warn("No document detected.");
    }
}

document.getElementById('loading').remove();