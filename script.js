const selectRandomColor = () => {
  const random = ['red', 'green', 'blue', 'orangered', 'brown', 'purple', 'blue', 'black'];

  const randomColor = Math.floor(Math.random() * random.length);

  const multiplyRandomColor = random[randomColor]

  document.querySelector('.js-body').style.backgroundColor = multiplyRandomColor;
  console.log(`you selected ${multiplyRandomColor}`)
}

document.querySelector('.but').addEventListener('click', () => {
  selectRandomColor();
});

// SWITCH statement and IF statements are the same thing examples are below

function getPlanet(id) {
  let name;
  switch (id) {
    case 1: 
      name = 'mecury' 
      break;
    case 2:
      name = 'venus'
      break;
    case 3: 'earth'
    break;
  }

  return name;
}
console.log(getPlanet(1))

function getPlanetIf(id) {
  let name;
  if (id === 1) {
    name ='mecury'
  } else if (id === 2) {
    name ='venus'};

  return name;
}
console.log(getPlanetIf(2));

// reverse a string 
  const array = [1, 2, 3];
  array.reverse();
  console.log(array)

  function reverseString(str) {
  //  const arr = str.split('');
  //  const reverse = arr.reverse('');
  //  const join = reverse.join('');

  // return join;

          // OR

  return str.split('').reverse('').join('');
  }

  console.log(reverseString('hello'))
  console.log(reverseString('better half'))

  function evenOdd(id) {
    if (id % 2 === 0) {
      return 'even'
    } else {return 'odd'}
  };

  console.log(evenOdd(50))
  console.log(evenOdd(97))

  function getCount(str) {
    let vowelsCount = 0;

    const array = str.split('');
    for(let i = 0; i < array.length; i++){
      if(array[i] === 'a') {
        vowelsCount++
      } else if(array[i] === 'e') {
        vowelsCount++
      } else if(array[i] === 'i') {
        vowelsCount++
      } else if(array[i] === 'o') {
        vowelsCount++
      } else if(array[i] === 'u') {
        vowelsCount++
      }
    }

                  // OR

    // array.forEach((letter) => {
    //   switch(letter) {
    //     case 'a': vowelsCount++; break;
    //     case 'e': vowelsCount++; break;
    //     case 'i': vowelsCount++; break;
    //     case 'o': vowelsCount++; break;
    //     case 'u': vowelsCount++
    //   }
    // })
    return vowelsCount;
  };

  console.log(getCount('hello'))
  console.log(getCount('aeiou'))

function isDivisible(x, y, z) {
  if (y % x === 0 && z % x === 0 ) {
    return true;
  } else {return false;}
};

console.log(isDivisible(3, 3, 6))
console.log(isDivisible(3, 3, 4))

function makeNegative(num) {
  // if (num < 0) {
  //   return num;
  // } else {return -num};

          // or
  
  // return num < 0? num: -num;

          // or 

  return -Math.abs(num)

};

console.log(makeNegative(40));
console.log(makeNegative(-40));

class SmallestIntegerFinder {
  findSmallestInt(arrayOfNumbers) {
    // let smallestNumber = 0;
    // arrayOfNumbers.forEach((arrayNo, index) => {
    //     if (index === 0) {smallestNumber = arrayNo};

    //     if (arrayNo < smallestNumber) {smallestNumber = arrayNo}
    // });

    // return smallestNumber;

    return Math.min(...arrayOfNumbers)
  };
}

const sif = new SmallestIntegerFinder()
console.log(sif.findSmallestInt([50, 10, 20]))

function mathMax(arr) {
  return Math.max(...arr)
}
console.log(mathMax([10, 20, 30]));

let summation = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++){
   sum +=i;
  }
  return sum;
}

console.log(summation(5));

function getAverage(marks) {
  //average = sum of all the nos / the count of all the nos

  // const count = scoreArray.length;
  // let sum = 0;
  // for(let i = 0; i <= count; i++) {
  //  sum += scoreArray[i]
  // };
  //   return Math.floor(sum / count);

  let average = Math.floor(marks.reduce((sum, x) => {sum + x}) / marks.length)

  return average;
  };

  console.log(getAverage([1, 2, 3, 7]));

  const str = 'hello'
  //removes the first and last letter in a string
  console.log(str.substring(1, str.length - 1))
  console.log(str.slice(1, -1));

function positiveSum(arr) {

  let sum = 0;

  arr.forEach((array) => {
    if (array > 0) {
      sum += array
    } else {sum = sum}
  })
  return sum;
}
console.log(positiveSum([1, -1, 3]))
console.log(positiveSum([1, -1, 3, 5, -2]))

function basicOperation(operation, value1, value2) {

  // let result;

  // switch(operation) {
  //   case '+': result = value1 + value2; break;
  //   case '-': result = value1 - value2; break;
  //   case '*': result = value1 * value2; break;
  //   case '/': result = value1 / value2; break; 
  // }
  // return result;

          // 0r

  const result = value1 + operation + value2

  return eval(result)
};

console.log(basicOperation('+', 1, 2))
console.log(basicOperation('-', 1, 2))
console.log(basicOperation('*', 1, 2))
console.log(basicOperation('/', 1, 2))

function repeatStr(noOfReapeats, str) {

//   starterString = ''
// for(let i = 0; i < noOfReapeats; i++){
//   starterString += str
// };
// return starterString

              // or

  return str.repeat(noOfReapeats)
}

console.log(repeatStr(5, 'get'))

function maps(array) {
    const arraysMap = array.map((arrayItem) => {
        return arrayItem *2
    });
    return arraysMap;
};

console.log(maps([1,2,3]));

function hero(bullets, dragons) {
  return bullets/dragons >=2 ? true : false
}

console.log(hero(4,2))

function arrayPlusArray(arr1,arr2){

  const resultArray = [];

  for(let i = 0; i < arr1.length; i++) {
    const newArr1 = arr1[i];
    const newArr2 = arr2[i];

    addedBothArrays = newArr1 + newArr2;

    resultArray.push(addedBothArrays);
  };
    return resultArray;
};

console.log(arrayPlusArray([1, 2, 3], [4,5,6]));

// takes a number or year and returns the century or rounds it up to the nearest integer/ whole No
console.log(Math.ceil(2025/100));

// caculates the total points after a game 
function points(gamesArray) {
  let totalPoints = [0, 0];
  
  for(let i = 0; i < gamesArray.length; i++) {
    // samplevalue 3:1

    const score = gamesArray[i]
    const partScore = score.split(':');
    const teamX = partScore[0];
    const teamY = partScore[1];

    if (teamX > teamY) {
      totalPoints[0] += 3;
    } else if (teamX === teamY) {
      totalPoints[0] += 1; 
      totalPoints[1] += 1
    } else if(teamY > teamX) {
      totalPoints[1] += 3;
    }

    
   
  };

  let joinPoints = totalPoints.join(':');

  return joinPoints;
};


console.log(points(['2:1']))
console.log(points(['2:2']))
console.log(points(['2:4']))

;

let messages = 1;
let titleDisplay = true;
let intervalId;


newMessage();


function newMessage () {
  if (messages === 0) {
    return stopMessages();
  }
  if (titleDisplay) {
    intervalId = setInterval(() => {
      if (document.title === 'front-end'){
       document.title = `(${messages}) New Messages`
     } else {document.title = 'front-end'}
     }, 2000);
  };

}

const stopMessages = () => {
  document.title = 'front-end'
}

// array.pop takes out the last element from an array and return the element
const arrayPop = [1,2,,3,4,5];

console.log(arrayPop.pop());

console.log(arrayPop);

// array.include checks whether an element is in an array and returns true or false

const arrayInclude = ['obi','get', 'this', 'cat']
 
console.log(arrayInclude.includes('get'))
console.log(arrayInclude.includes('can'))

function myCallback (someNumber) {
  return someNumber * 2
};

function mainFunction(randomNumber, shouldCall, callback) {
  let result = randomNumber;

  if(shouldCall) {
    result = callback(randomNumber)
  };

  return result;
}

console.log(mainFunction(20, true, myCallback))

const a = ['hello', 'best', 'this'];
console.log(a.map(aMap => aMap[0]))

// javascript dates
const myDate = new Date()
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());

// regular expressions. note it is Case Sensitive
// with square brackects[0-9] you have a lot of options
// 

const emailValidatorRegEx = new RegExp('^.+@.+\..+$');

const userInput = 'invalidemail@g';
const userInput1 = 'globalemma@gmail.com';
const isValid = emailValidatorRegEx.test(userInput1)
const isValid1 = emailValidatorRegEx.test(userInput)
console.log(isValid)
console.log(isValid1)
// identifiers / quantifiers in regexp
const regex = new RegExp('g');

const string1 = 'my favorite food is steak';
const string2 = 'my favorite thing to do is code';
console.log(regex.test(string1))
console.log(regex.test(string2));

const regex2 = new RegExp('favorite')
console.log(regex2.test(string2));

const regexShortcut = /foods/;
console.log(regexShortcut.test(string1));

// quantifiers

console.log(/[a-z ]+/.exec(string1))
console.log(/[a-z ]{2,6}/.exec(string1))
console.log(/[a-z ]{11}/.exec(string1))

const regexFlag = /[a-z]+/g;

const string = 'hello world, 2025 @ more of a string'
// console.log(/^[a-z ]+,[0-9]+[a-z ]+$/.exec(string))
      // or
console.log(/.+/.exec(string));

const strin = 'hello';

const splitString = strin.split('')

console.log(splitString.join(''));

const myString = 'my dog jumped on the bed. my dog is a bad dog';

const newString = myString.replaceAll('dog', 'cat');

console.log(newString)

const arraySlice = [1,2,3,4,5,6];
console.log(arraySlice.slice(3));
console.log(arraySlice.slice(3,5));

const arraySplice = [1,2,3,4,5,6];
console.log(arraySplice.splice(3,2, 'comot', 'jare'))
console.log(arraySplice)

const arrayIndexOf = [1,2,3,'index',5,6];
console.log(arrayIndexOf.indexOf('index'))
console.log(arrayIndexOf[arrayIndexOf.indexOf('index')]);

const arrayFindIndex = [
  {
    firstName: 'obi',
    lastName: 'okafor'
  },
  {
    firstName: 'obi',
    lastName: 'okafor'
  },
  {
    firstName: 'obi',
    lastName: 'okafor'
  },
  {
    firstName: 'obi',
    lastName: 'nwafor'
  },
];

const testingAFI = arrayFindIndex[arrayFindIndex.findIndex((item) => {
  return item.lastName !== 'okafor'
})];
console.log(testingAFI);

const arrayReduce = [1, 2, 3, 4, 5, 6, 7]

const reduceTest = arrayReduce.reduce((sum, item) => sum += item, 0) / arrayReduce.length;
console.log(reduceTest);

const arraySort = [3, 4, 7, 2, 1, 9]
sortTestAscend = arraySort.sort((firstNo, secondNo) => firstNo - secondNo) /* sorts from the smallest to the largest number*/
sortTestDescend = arraySort.sort((firstNo, secondNo) => secondNo - firstNo) /* sorts from the largest to the smallest number*/

console.log(sortTestAscend)
console.log(sortTestDescend)

console.log(Math.PI);
console.log(Math.min(3,4,5,6));
console.log(Math.max(3,4,5,6));

// note: to convert a string to a number: number('2') or +'2'

console.log(typeof (+'2')) //returns number

// document object model(DOM)

// create a new html p-tag with javascript alone

const elementNode = document.createElement('p')
const textNode = document.createTextNode('content')
const attributeNode = document.createAttribute('class')

console.log(textNode);
console.log(attributeNode);

elementNode.appendChild(textNode);

attributeNode.value = 'some-class'

elementNode.setAttributeNode(attributeNode)
console.log(elementNode);

// document.body.appendChild(elementNode);
// console.log(document.body)

//function that creates a new p-tag on click of the button 
function createPtag() {

  //  document.querySelector('.js-body').innerHTML += `<div>create function</div>`;
   
  document.querySelector('.add').innerHTML += `<p>function</p>` 
}

// button to call on the function and create a new p-tag
const parabut = document.querySelectorAll('button').item(1);

parabut.addEventListener('click', () => {
 createPtag()
})

// editing the list<li></li> elements from javascript
const ulList = document.querySelector('.parent');

const thirdList = ulList.children[2];
const firstList = ulList.children[0];

thirdList.innerHTML = 'changed now'

firstList.textContent = 'changed first list now'

//created a new list
ulList.appendChild(document.createElement('li'));

ulList.children[3].textContent = 'added new list'

// creating a new element before a particular one 
const bodyTag = document.querySelector('.js-body');

const newElement = document.createElement('p');

newElement.textContent = 'here we added a new element'; 

bodyTag.insertBefore(newElement, ulList);

// creating a break tag before the (parabut)

const breakTag  = document.createElement('br');
const breakTag1  = document.createElement('br');

bodyTag.insertBefore(breakTag, parabut);
bodyTag.insertBefore(breakTag1, parabut);



// New Project Assignment


// get Quote

function getRandomQuote() {
  const quotes = [
    'He who sleeps early rises early and achieves much', 
    'a stitch in time saves nine', 
    'work so hard like never before to go far in life', 
    'to change the result you have been getting you need to change what you have been doing to get that result', 
    'show me your friends and i will tell you who you are', 
    'what a man soeth that he shall reap'
  ];
  
  const randomQuote = Math.floor(Math.random() * quotes.length);

  const getQuote = quotes[randomQuote];
  
  const quotesDisplayHTML = document.querySelector('.js-wisdom');

  quotesDisplayHTML.innerHTML = getQuote;
};

const quotesButton = document.querySelector('.js-quotes');

// The button for getting the random element

quotesButton.addEventListener('click', () => {
    getRandomQuote();
    document.querySelector('.js-riddles').innerHTML = '';
    document.querySelector('.js-riddles-results').innerHTML = '';
    document.querySelector('.js-jokes').innerHTML = '';
});

// riddles section
const riddles = [
  'what has a neck but no head ?',
  'I am not a blanket yet i cover the ground; a crystal from heaven that does not make a sound ?',
  'what has a head but no brain ?',
  'I have a neck but no head, i have to arms but no arm what am i ?',
  'what comes down but never goes up ?'
];

const riddleAnswers = [
  'A bottle',
  'Snow-flake',
  'Lettuce',
  'A Shirt',
  'Rain'

];

let riddlesAnswerDisplay = ''

// funcion to get the riddles 

function getRandomRiddle() {
  const randomRiddle = Math.floor(Math.random() * riddles.length);

  const getRiddle = riddles[randomRiddle];

  const riddlesDisplayHTML = document.querySelector('.js-riddles');

  riddlesDisplayHTML.innerHTML = getRiddle;

  
  switch (randomRiddle) {
    case 0 :
      riddlesAnswerDisplay = riddleAnswers[0]; break;
    case 1 : 
      riddlesAnswerDisplay = riddleAnswers[1]; break;
    case 2 : 
      riddlesAnswerDisplay = riddleAnswers[2]; break;
    case 3 :
      riddlesAnswerDisplay = riddleAnswers[3]; break;
    case 4 : 
      riddlesAnswerDisplay = riddleAnswers[4]; break;
  };

};

// button for getting the riddle

const riddleBtn = document.querySelector('.js-riddle-btn');

riddleBtn.addEventListener('click', () => {
  getRandomRiddle();
   document.querySelector('.js-wisdom').innerHTML = ''
   document.querySelector('.js-riddles-results').innerHTML = '';
   document.querySelector('.js-jokes').innerHTML = '';
});

//button for getting the answer to the riddle

const riddleAnswersBtn = document.querySelector('.js-answers');

function btncall() {
  const riddlesResults = document.querySelector('.js-riddles-results');
  riddlesResults.innerHTML = riddlesAnswerDisplay;

};


riddleAnswersBtn.addEventListener('click', () => {

  if (document.querySelector('.js-riddles').innerHTML === '') {
 
    alert('Click the "Riddle Me" Button')
  } else{btncall()};
  
});

//jokes array

const jokes = [
  'This is not left this is right',
  'Them no fit killi pesin',
  'mana o ezikokwu',
  'forget that talk',
  'Them no dey telli Pesin'
]

//function to run jokes
function randomJokes () {
  const randomIndex = Math.floor(Math.random() * jokes.length);

  const jokesPicker = jokes[randomIndex];

  const jokesHTML = document.querySelector('.js-jokes');

  jokesHTML.innerHTML = jokesPicker;

}

//onclick button to run the randomJokes function

const jokesBtn = document.querySelector('.js-jokes-btn');

jokesBtn.addEventListener('click', () => {
  randomJokes();
   document.querySelector('.js-wisdom').innerHTML = ''
   document.querySelector('.js-riddles').innerHTML = ''
   document.querySelector('.js-riddles-results').innerHTML = ''
});


//caculator project

//adding a new caculation
let caculation = 0
function caculatorFunction(num) {
  caculation += num;
  displayCaculation();
};

//displaying the caculation
function displayCaculation() {
  document.querySelector('.js-display')
    .innerHTML = caculation
};

//making the delete button interactive
function deleteNo() {
  const calcArray = caculation.split('');
  calcArray.pop();
  return caculation = calcArray.join('');
   
};

// to do list project


const todoListArray = [];

todoListBody()

function todoListBody () {
  
  let todolistHtml = ''

  todoListArray.forEach((listArray) => {
    const todoTask = listArray.task
    const todoTime = listArray.time

    const listHTML = `<div class="task-div">${todoTask}</div> 
                      <div class="time-div">${todoTime}</div> 
                      <button class="js-delete delete">Delete</button>
                      `

          todolistHtml += listHTML;     

  });

  document.querySelector('.js-list').innerHTML = todolistHtml;

  const delBtn = document.querySelectorAll('.js-delete');

  delBtn.forEach((del, index) => {
    del.addEventListener('click', () => {
        todoListArray.splice(index, 1);
        todoListBody()
    })
  });

  localStorage.setItem('task', todolistHtml)
};

function addNewToDo () {
  const taskInput = document.querySelector('.js-task')
  const taskInputValue = taskInput.value

  const timeInput = document.querySelector('.js-time')
  const timeInputValue = timeInput.value
  
  if (taskInputValue === '') {
    return alert('No Task To Add')
  } else if(timeInputValue === '') {
    return alert('Please Add a Date')
  }

  todoListArray.push({
    task: taskInputValue,
    time: timeInputValue
  });

  

  todoListBody();

  taskInput.value = ''
  timeInput.value = ''

  
}


// Drop Down Evenet listener
document.querySelector('.js-text')
  .addEventListener('click', () => {
      const jsDrop = document.querySelector('.drop');

      if (jsDrop.style.display === 'block') {
        return jsDrop.style.display = 'none'} else{jsDrop.style.display = 'block'}
     
  })

  
