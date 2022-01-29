/* 1) To find the table with id= "age-table" */
let table=document.getElementById("age-table");
console.log(table);

// Separator
console.log("----------------------------------");

// 2. To find all label elements inside that table with id= "age-table"
//  HINT: (there should be 3 labels inside the table)
labels=document.getElementById("age-table").querySelectorAll("label");
console.log(labels);

// Separator
console.log("----------------------------------");

// 3. To find the first td in that table (with the word “Age”)
// Explanation : Here the querySelector will recognize the first td by default.
td1=document.querySelector("td");
console.log(td1);

// Separator
console.log("----------------------------------");

// 4. To find the form with name="search".
form1=document.getElementsByTagName("form");
console.log(form1[0]);

// Separator
console.log("----------------------------------");

// 5. To find the first input and the last input in that form name="search"
inputsArray=document.querySelectorAll("input");
//  First input can be accessed by inputsArray[0]. 
console.log(inputsArray[0]);
// To find the array length
console.log(inputsArray['length']);
// By using Array Length , we can access the last input by inputsArray[8].
console.log(inputsArray[8]);

console.log("--------------Thank You---------------");