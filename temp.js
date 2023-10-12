/*
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let foundName = false;
    let foundProp = false;
    for (let i = 0; i < contacts.length; i++) {        
        if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
        if (contacts[i].firstName == name) {
            foundName = true;
        }
        if (contacts[i].hasOwnProperty(prop)) {
            foundProp = true;
        }                
    }
    if (!foundName) {
        return "No such contact";
    }
    if (!foundProp) {
        return "No such property";
    }

    return 'the end';
    // Only change code above this line
  }
  
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
*/

// Only change code below this line
/*
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      let countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  
    return;
  }
  
  // Only change code above this line
  console.log(countdown(5));
*/


  function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
      return [startNum];
    } else {
      let myArray = rangeOfNumbers(startNum, endNum - 1);
      myArray.push(endNum);
      return myArray
  
    }
  
    return [];
  };

  console.log(rangeOfNumbers(1, 5));
  console.log(rangeOfNumbers(6, 9));