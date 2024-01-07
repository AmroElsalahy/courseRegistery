/*
 * Main scripts file for the timetable website.
 * Assignment 4, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */
let div1 = document.createElement("div");
div1.className = "div-parent"

// appendChild property  https://www.w3schools.com/jsref/met_node_appendchild.asp

document.querySelector('.container').appendChild(div1);

// for loop for reading array info and intializing divs with diffrent iDs  for each course with  paragraph and heading , calling code , name of course and prof and rest info
for (i = 0; i < courseInfo.length; i++) {


  // creating elements checking : https://www.w3schools.com/jsref/met_document_createelement.asp

  let holde = document.createElement('div');
  holde.className = "div-pa" + [i]

  courseInfo[i].className = "course-content";

  var d = courseInfo[i];

  var heading = document.createElement('h2');

  heading.textContent = (d.code + ":" + d.name + d.prof);
  var paragraph = document.createElement('p');
  paragraph.textContent = (d.currEnroll + d.maxEnroll + d.location + d.schedule + d.info);


  // putting heading and paragraph inside each div

  holde.appendChild(heading);
  holde.appendChild(paragraph);

  // putting divs inside container (div inside main  )
  document.querySelector(".div-parent").appendChild(holde);

}

// intializing button for each course and giving it a function to store course name and code inside course bag
// btn1
let btn0 = document.createElement("button");
btn0.innerHTML = "Sign-Up for Course"
btn0.addEventListener("click", function() {
  var p1 = document.createElement("p");
  p1.innerHTML = courseInfo[0].code + ": " + courseInfo[0].name;

  document.querySelector('.course-selection-bag').appendChild(p1);

});
document.querySelector(".div-pa0").append(btn0);

//btn2
let btn1 = document.createElement("button");
btn1.innerHTML = "Sign-Up for Course"
btn1.addEventListener("click", function() {


  var p2 = document.createElement("p");
  p2.innerHTML = courseInfo[1].code + ": " + courseInfo[1].name;

  document.querySelector('.course-selection-bag').appendChild(p2);
});
document.querySelector(".div-pa1").append(btn1);

// btn 3
let btn2 = document.createElement("button");
btn2.innerHTML = "Sign-Up for Course"
btn2.addEventListener("click", function() {
  var p3 = document.createElement("p");
  p3.innerHTML = courseInfo[2].code + ": " + courseInfo[2].name;


  document.querySelector('.course-selection-bag').appendChild(p3);

});
document.querySelector(".div-pa2").append(btn2);


// btn4

let btn3 = document.createElement("button");
btn3.innerHTML = "Sign-Up for Course"
btn3.addEventListener("click", function() {

  var p4 = document.createElement("p");
  p4.innerHTML = courseInfo[3].code + ": " + courseInfo[3].name;
  document.querySelector('.course-selection-bag').appendChild(p4);
});
document.querySelector(".div-pa3").append(btn3);

// btn5

let btn4 = document.createElement("button");
btn4.innerHTML = "Sign-Up for Course"
btn4.addEventListener("click", function() {
  var p5 = document.createElement("p");
  p5.innerHTML = courseInfo[4].code + ": " + courseInfo[4].name;
  document.querySelector('.course-selection-bag').appendChild(p5);
});
document.querySelector(".div-pa4").append(btn4);

// btn6

let btn5 = document.createElement("button");
btn5.innerHTML = "Sign-Up for Course"
btn5.addEventListener("click", function() {
  var p6 = document.createElement("p");
  p6.innerHTML = courseInfo[5].code + ": " + courseInfo[5].name;
  document.querySelector('.course-selection-bag').appendChild(p6);

});
document.querySelector(".div-pa5").append(btn5);

// btn7

let btn6 = document.createElement("button");
btn6.innerHTML = "Sign-Up for Course"
btn6.addEventListener("click", function() {
  var p7 = document.createElement("p");
  p7.innerHTML = courseInfo[6].code + ": " + courseInfo[6].name;

  document.querySelector('.course-selection-bag').appendChild(p7);
});
document.querySelector(".div-pa6").append(btn6);

// btn8

let btn7 = document.createElement("button");
btn7.innerHTML = "Sign-Up for Course"
btn7.addEventListener("click", function() {

  var p8 = document.createElement("p");
  p8.innerHTML = courseInfo[7].code + ": " + courseInfo[7].name;
  document.querySelector('.course-selection-bag').appendChild(p8);
});
document.querySelector(".div-pa7").append(btn7);
