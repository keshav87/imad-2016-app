// console.log('Loaded!');
// //change text
// var element= document.getElementById('main-text');
// element.innerHTML='my nake is keshav gupta';
// //move the image
// var img=document.getElementById('img1');
// var marginLeft=0;
// function moveRight()
// {
//     marginLeft=marginLeft+5;
//     img1.style.marginLeft=marginLeft+'px';
// }
// img1.onclick=function(){
//     var interval=setInterval(moveRight,500);
//     //img1.style.marginLeft='100px';
// };

var button = document.getElementById('counter');
var counter=0;
button.onclick = function()
{
// make a request to the end pointer counter
    var request = new XMLHttpRequest();
    //capture the request and store it in a variacle
    //render the variable in the correct span
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};