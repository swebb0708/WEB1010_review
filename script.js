// Question 1
//1A
var a = 2*2;

//1B
var b = "Hi, my name is" + " " + "Saliyha Webb." + " This is starting to make" + " sense," + " and I might actually enjoy it.";

//1C
var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;
var c = `
 ${one} fish, 
    ${two} fish,
        Red fish, 
            Blue fish,
 "... ${three}, ${four}, ${five} once I caught a fish alive."
`;

//1D
var array = [4,8,16,24, "string1", "string2", 2 == 2, 3!=6, "string1" == "string2",["This inner array has",3, "elements"] ];


//1E

var object = {
    num: 1111,
    string: "This is a string",
    array: [1,2,3,4],
    object: {
        meta: "inception"
    }
};


//Question 2B
//2Bi
var element = document.querySelector("h2");

//2Bii
var cl = document.querySelector(".class");


//2Biii
var id = document.querySelector("#id");

//2Biv
var attribute = document.querySelector("[type]");

//2Bv
var however = document.querySelector("button");


//Question 3
//3A & B
however.addEventListener("click", function(){
    attribute.value
});

//3C
id.innerHTML += 
`<div> <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""></img> </div>`;

//3D

cl.textContent = 'this paragraph has class';


//Question 4
//4A
function doStuff(input,src){

};


//Question 5
function loopIt(num){
    for(var i=0; i>=num; i++){
        doStuff();
    }
}


