console.log('Loaded!');
//change text
var element= document.getElementById('main-text');
element.innerHTML='my nake is keshav gupta';
//move the image
var img=document.getElementById('img1');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+5;
    img1.style.marginLeft=marginLeft+'px';
}
img1.onclick=function(){
    var interval=setIntervel(moveRight,500);
    //img1.style.marginLeft='100px';
};