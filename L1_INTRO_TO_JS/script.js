//console.log('Class Started');
//console.log('Attendance');
//console.log("class started");

// let a =10;
// let b=20;

// console.log(a);
// //FUNCTIONS
// function sumOfTwo(param1,param2){

//     let answer =param1+param2;
//     return answer;
// }

// let arg1=10;
// let arg2=20;

// console.log(sumOfTwo(arg1,arg2))

// console.log(b);

// const a=500;
// var b=1000;
// let c=2000;
  
// function firstFun(){
//     let a=20;
//     let b=30;
//     function secFun(){
//         let a=10000;
//         let c=50;
//         function thirdFun(){
//             let d=80;
//             console.log(a+b+c+d)
//         };
//         thirdFun();
//     }
//     secFun();
// }
// console.log (firstFun());
// console.log(a);
// console.log(b);
// console.log(c); 

  
// for(var i=0; i<=5; i++){
//     setTimeout(function () {
//         console.log(i)
//     },2000);
// }

// for(let i=0; i<=5; i++){

//     let count=0;
//     const intervalId = setInterval(function (){
//         console.log(i);
//         count++;

//     if(count==2){
//        clearInterval(intervalId);
//     }

//     },2000);
// }


// for (let i=0 ; i<=5 ; i++){
//     let count=0;

//     const intervalId = setInterval(function (){
//         console.log(i);
//         count ++;

//     if(count==2){
//         clearInterval(intervalId);
//     }

//     },2000 );
// }

// if we want to stop only after one time we can do it without count and conditional statement just by using 
//clearInterval(intervalId);
//but we have to define like :
//intervalId=setInterval(()=>{});

for (var i=0 ; i<=5 ; i++){

    function close(j){
        setTimeout(function (){
        console.log();
    },2000);
}
close(i)

}
