/*let a = 10;
let b = 5;

console.log(a + b)
console.log("a % b",a / b)
console.log(a ** b)
let name1 = "fayaz";
let name2 = "awais";
let name3 = "sudais";
let name4 = "ahamd";
console.log("good morning " + name1);
console.log(name1 + " is telented");
console.log("good morning " + name2);
console.log(name2 + " is intelegent");
console.log("good morning " + name3);
console.log(name3 + " is good student");
console.log("good morning " + name4);
console.log(name4 + " is rich student");

let name1 = "fyaz";
let name2 = "awaise";
let name3 = "sudaise";
let name4 = "umar";
let name5 = "ahmad";

fullNames(name1);
fullNames(name2);
fullNames(name3);
fullNames(name4);
fullNames(name5);


function fullNames(fullNames) {
    console.log(fullNames + " is a good student")
    
};*/
//Artematic opretor
/*let x = 10;
let y =5;
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);*/

//Asignement opretor
/*let a = 5;
let b = 8;
a /= 10;
b -= 2;
console.log(a)
console.log(b)*/

//comparision opretor
/*let a = 10;
let b = 10;
console.log("a == b", a == b);
console.log("a != b", a != b)
let x = 5;
let y = "5";
console.log("x == y",x == y);
console.log("x >= y", x >= y);

//logical opretor
let c = 10;
let d = 10;

let c1 = c === d;
let d1 = c > d;
console.log("c1 && d1", c1 && d1)
console.log("c1 || d1", c1 || d1)*/

//coditionol statment
//if statment
//else if statment
//else statment


//ternary opretor :

/*let age = 18;

age >= 18 ? console.log("velid") : console.log("not velid");*/


//practice one

/*let number = prompt("print number multiple of five");

if(number % 5 === 0) {
    console.log(number,"This number is in the table of five");
} else{
    console.log(number,"This number is NOT in the table of five");
}*/

//practice two

/*let marks = prompt("print student marks");

if(marks >= 90 && marks <= 100) {
    console.log("A grade")
} else if(marks >= 80 && marks < 89) {
    console.log("B grade")
} else if(marks >= 70 && marks < 80) {
    console.log("C grade")
} else if(marks >= 60 && marks < 69) {
    console.log("D grade")
} else if(marks >= 50 && marks < 59) {
    console.log("E grade")
} else if(marks > 100) {
    console.log("NO resulte")
} else if(marks <= 50) {
    console.log("fale")
}*/


//for loop

/*for(let count = 1; count <= 4; count++) {
    console.log("fayaz khan")
};

console.log("loop has ended");*/

//while loop


//prctice

/*let even = prompt("even or odd number")

if(even%2 === 0) {
    console.log("even number")
} else{
    console.log("odd number")
}*/

//practice

/*let gamenum = 20;
let usernum = prompt("enterd GAME password");

while(usernum != gamenum) {
    usernum = prompt("wrong  password")
}

console.log("congratulation you enterd a right password")*/

//how to access something in object easily

/*let obj = {
    item: "phone",
    price: 20000,
}

let objitem = "obj.item";


console.log(objitem)

console.log("I like to play cricket")*/


//how to write something in second line escape charcter

//console.log("my name is\nfayaz khan");

//how to give a space between two words escap carecter

//console.log("I like to become\ta webdevelper");

//how to find the value of words
//let name = "fayaz khan";
//console.log(name.length);


//methode of js

//upper methode
/*let a = "fayaz khan";
a = a.toUpperCase();
console.log(a);*/


//lower methode 
/*let b = "FAYAZ KHAN DEVELPER";
fayaz = b.toLowerCase();
console.log(fayaz);*/

//trim methode
/*let c = "                 fayaz khan develper    ";
console.log(c.trim());*/

//slice methode
/*let str = "fayaz khan develper";
console.log(str.slice(1, 9));*/

//concat methode add two variable
/*let str1 = "fayaz";
let str2 = "khan";
let resul = str1.concat(str2);
console.log(resul);*/

//the other way how to add two variable
/*let str1 = "fayaz khan";
let str2 = "develper";
let res = str1 + str2;
console.log(res);*/

//how to replace something replace methode
/*let str = "hello fayaz";
console.log(str.replace("hello","Hi"));*/

//how to access something in string charAt methode
/*let str22 = "fayaz khan";
console.log(str22.charAt(3));*/

//arrys in js
/*let name = ["maths", "bio", "develpment"];
let marks = ["90", "80", "100"];
console.log(name);
console.log(marks);*/

//arrys are mutable string are  Immutable

//how to access something arrys
/*let name = ["11", "10", "17", "18"];
console.log(name);
console.log(name[2] = 30);*/

//three codition for loops inesalization, stopingcondition, updation
/*for (let i = 1; i <= 10; i++) {
    console.log("FAYAZ KHAN DEVELPER")
};*/


//arrys is used to write something as a object but it will make our worke easily


//arrys over loop
/*let king = ["fayaz", "khan", "jojo", "jan", "english", "boy"];
for(let man = 0; man < king.length; man++) {
    console.log(king[man]);
};*/

//arry over of loop

/*let hero = ["banten", "spiderman", "heropante",];

for(let name of hero) {
    console.log(name);
};*/

//practice question

/*let marks = [90, 80, 70, 65, 50, 40];

let sum = 0;

for(let val of marks) {
    sum += val;
}
console.log(sum);

let aver = sum / marks.length;
console.log(aver);*/

//method in arrys 

//push methode is used to add something at the end
/*let item = ["apple", "ornge", "mango", "banana"];
item.push("chips", "tomato");
console.log(item);*/


//pop methode is used to delete the last thing
/*let item = ["apple", "ornage", "mango", "banana"];
let deleted = item.pop();
console.log("deleted", deleted);*/


//tostring methode is used to change arrys in to string
/*let food = ["paneer", "tomato", "potato", "banana"];
console.log(food)
console.log(food.toString());*/


//cocat methode is use to joine two variable
/*let pashtoon = ["jangerai", "arbaze", "shahida"];
let indain = ["heropante", "salmankhan", "sharokhan"];
let english = ["aj hoge", "jakema"];
console.log(pashtoon.concat(indain, english));*/

//unshift methode is use to add something at the starter
/*let king = ["fayaz", "farhan", "asife"];
king.unshift("adile");
console.log(king);*/

//shift methode is used to deleted something from the starter
/*let marvelHero = ["atman", "spiderman", "ironman", "thor"];
console.log(marvelHero);
marvelHero.shift();
console.log(marvelHero);*/

//slice methode is used to acces something in arrys
/*let age = [14, 16, 17, 18];
console.log(age);
console.log(age.slice(0, 3));*/

//splice methode is used to remove, deleted, replace
/*let arr = [10, 11, 22, 19, 18];
arr.splice(1, 3, 19, 22, 11);
console.log(arr);*/

//splice add methode
/*let val = ['fayaz', 'khan', 'develper'];
val.splice(1, 0, 'develper');
console.log(val);*/

//splice deleted methode
/*let item = ['froot', 'mango'];
item.splice(0, 1);
console.log(item);*/

//practice question
/*let comapneis = ['blomberg', 'microsoft', 'Uber', 'Gogle', 'IBM', 'Netflixe'];
console.log(comapneis.splice(0, 1));
console.log(comapneis);*/


//second part 
/*let comapneis = ['blomberg', 'microsoft', 'Uber', 'Gogle', 'IBM', 'Netflixe'];
console.log(comapneis.splice(2, 1, "Ola"));
console.log(comapneis);*/

//third part
/*let comapneis = ['blomberg', 'microsoft', 'Uber', 'Gogle', 'IBM', 'Netflixe'];
comapneis.push('Amazone');
console.log(comapneis);*/


//function in js there something by these we write a function function define, called function
//function define
/*function heroes () {
    console.log("fayaz", "ironman");
    console.log("spiderman", "batman");
};
//called/invoked function
heroes();*/


//the other way to write the function 
/*function heroes(invite) {
    console.log(invite);
    //parameter
}
heroes("well come to our school");*/ //argument 

//add number in function
/*function sum(x, y, z) {
    console.log(x + y + z)
};
sum(1381, 34183, 32943);*/


//practice
/*function myFunction(x, y) {
    console.log(x + y);
}

let val = myFunction(3, 19);
console.log(val);*/

//functioon parameter -> local veriable of function -> blocke scope


//compacte way writeing a function
//add
/*let add = (a, b) => {
    console.log(a + b);
}

//multiply
let mul = (a, b) => {
    console.log(a * b);
};

//subtarcte
let sub = (a, b) => {
    console.log(a - b);
}

//devide 
let devide = (a, b) => {
    console.log(a / b);
};*/


//practice questione
/*function countVowel(str) {
    counte = 0;
    for(const chart of str) {
        if(chart === "a" || chart === "e" || chart === "i" || chart === "o" || chart === "u") {
            counte++;
        }
    }
    console.log(counte);

}*/
//forEach function is use for do worke in arrys
//we calle to arry higher order function
/*let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

arry.forEach(/*call back functionfunction print(name) {
    console.log(name);
});*/

//pracice Question
/*let numsquare = [2, 3, 4, 5,];

numsquare.forEach((number) => {
    console.log(number * number * number);
});*/


//map in is also use for to do worke in arry but is little diffrenet from forEach 
//map
/*let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

number.map((numb) => {
    console.log(numb);
});*/
//pr
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach((square) => {
    console.log(square * square);
});*/


// filtter 
/*let number = prompt("print number");

if(number % 2 === 0) {
    alert("even number");
} else {
    alert("odd number");
}*/


//filter function

/*let arr = [1, 2, 3, 4, 5];

let newarr = arr.filter((Number) => {
    console.log(Number % 2 === 0);
});
console.log(newarr);*/

//reduce is used to add the whole arry
//reduce
/*let arr = [1, 2, 3, 4, 5];

const arry = arr.reduce((pre, cur) => {
    return pre + cur;
});
console.log(arry);*/

//find the largest number

/*let arr = [234, 456, 1232, 4343];

let newarr = arr.reduce((pre, cure) => {
    return pre > cure ? pre : cure; //it is use for find the largest number
});
console.log(newarr);



//practice question

let sum = prompt("add the number");
let summ = [1, 2, 3, 4, 5, 6, 7];

for(let i=1; 1<=sum; i++) {
    sum[i-1] = 1;
}
console.log(sum);
let newsum = summ.reduce((pre, curr) => {
    return pre + curr;
});

console.log(newsum);*/

//DOM the full forme of DOM is document objecte modale
//DOM is use for access something from html in to javascripte

//DOM

//DOM access id by DOM

/*let header = document.getElementById("heading");
console.log(header);
console.dir(header);*/

//DOM access class by DOM
/*let element = document.getElementsByClassName("heading");
console.dir(element);
console.log(element);*/

//DOM access tag by DOM
/*let head = document.getElementsByTagName("h1");
console.dir(head);*/

//DOM compacte way to writte tag
/*let Ele = document.querySelector("");
console.dir(Ele);
console.log(Ele);*/

//access all the tags
/*let element = document.querySelectorAll("h1, id, class");
console.dir(element);
console.log(element);*/

//DOM properteis

//tagName: properteis returne tag name
/*let Ele = document.querySelector("h1");
console.dir(Ele);
Ele.tagName*/

//innerText is access all the thing in tag
/*let ele = document.querySelector("div");
console.dir(ele);
console.log(ele.innerText);*/

//childrern properteise is use to access something in tag, id and class
/*let elemente = document.querySelector("div").children;
console.dir(elemente);*/

//innerHTML is use to access all the thing from html
/*let item = document.querySelector("div");
console.dir(item);
console.log(item);*/

//change in innerText
/*let Ele = document.querySelector("div");
console.dir(Ele);
console.log(Ele.innerText = "fayaz");*/

//change in innerHTML
/*let java = document.querySelector("div");
console.dir(java);
console.log(java.innerHTML = "<h1>fayaz develper<\h1>");*/

//practice 
/*let ELe = document.querySelector("h1");
console.dir(ELe);
console.log(ELe.innerText = "I like English");*/

//textContent is use to show a visible thing in browser
/*let Ele = document.querySelector("h1");
console.log(Ele.textContent);*/


//getAttribute is used to access the class, id name
/*let numb = document.querySelector("h1");
console.log(numb);
let val = numb.getAttribute("class");
console.log(val);*/


//setAttribute is used to chage the class and id
/*let number = document.querySelector("h1");
console.log(number.setAttribute("class", "Element"));*/

//style in JS
/*let color = document.querySelector("h3");
color.style.backgroundColor = "red";*/

//append is used to create some thing on screen at the end
/*let buton = document.createElement("button");
buton.innerText = "clicke!";
console.log(buton);
let Ele = document.querySelector("div");
Ele.prepend(buton);*/


//prepend is used to write some at top
/*let buton = document.createElement("button");
buton.innerText = "clike!";
console.log(buton);

let Ele = document.querySelector("div");
Ele.prepend(buton);*/

//before
//after is used to write just before and after
/*let  num = document.createElement("h2");
num.innerHTML = "<i>Hi! I am Fayaz</i>";
document.querySelector("body").prepend(num);*/


//remove is used to remove the thing
/*let like = document.querySelector("h3");
like.remove();*/


//classlist is used to create anonther class
/*let Ele = document.querySelector("h3");
Ele.classList.add("making");*/


//Event is used to clike on button, div give something in output
/*let btn = document.querySelector("button");
btn.onclick = () => {
    alert('it has cliked')
}*/

//Event on overmouse 
/*let btn1 = document.querySelector("button");
btn1.onmouseover = () => {
    alert('it has been cliked')
}*/

//Event on duobleclike
/*let btn2 = document.querySelector("button");
btn2.ondblclick = () => {
    alert('it has cliked')
}*/


//addEventListner is used for morethan one function in Event
/*let evt = document.querySelector("button");
evt.addEventListener = ("click", () => {
    console.log('it has cliked');
});*/


//practice Question
/*let colorbtn = document.querySelector("button");
let colorchg = "light";

colorbtn.addEventListener("click", () => {
    if(colorchg === "light") {
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(colorchg);
});*/


//practice

let Btn = document.querySelector("button");
let body = document.querySelector("body");
let curentmode = "light";

Btn.addEventListener("click", () => {
    if(curentmode === "light") {
        body.classList.add("darke");
    }
    console.log(curentmode);
});