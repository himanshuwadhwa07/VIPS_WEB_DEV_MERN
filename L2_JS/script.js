// for (var i=0 ; i<=5 ; i++){

//     function close(j){
//         setTimeout(function (){
//         console.log(j);
//     },2000);
// }
// close(i)
// } 

// //FUNCTIONS

// //1. NORMAL FUNCTION
// function nameOfFunc(){
//     return 1
// }

// //2. ANONYMOUS FUNCTION

// function(){

// }

// //3. ARROW FUNCTION

// ()=>{

// }

// //4. FUNCTION EXPRESSION 

// var myfunction=  ()=>{

// }

// //5. NAMED FUNCTION
// var muFunction2 = function(){
//     console.log("HELLOOOO");
// }



// var functionB = function(){
//     console.log("hello world")
// }
// functionB()

// first class function 

// var function2= ()=>{
//     console.log("hello function passed as an argument successfully")
// }
// function Pass(x){
//     console.log("HELLo")
//     x();
// }

// Pass(function2);



// function outerFunction(collegeName){
//     console.log("THIS IS MY COLLEGE DETAIL");
//     return function(){
//         console.log("HELLO FROM", collegeName);
//     }
// }
// var myData=outerFunction("VIPS");

// console.log(myData());

function menu(cb){
    console.log("checking Menu");
    setTimeout(cb,5000);
}  
function order(cb){
    console.log("Ordering Food");
    setTimeout(cb,3000);
}  

function dinner(cb){
    console.log("Eating Dinner");
    setTimeout(cb,10000);
}  
function sauf(cb){
    console.log("eating sauf");
    setTimeout(cb,1000);
}  
function paybill(cb){
    console.log("Paying bill");
    setTimeout(cb,5000);
}  

menu(()=>{
    order(()=>{
        dinner(()=>{
            sauf(()=>{
                paybill()
            })
        })
    })
})
