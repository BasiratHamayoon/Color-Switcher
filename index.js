var purpleColor = document.getElementById('purple');
var blueColor = document.getElementById('blue');
var greenColor = document.getElementById('green');
var redColor = document.getElementById('red');
var yellowColor = document.getElementById('yellow');
var orangeColor = document.getElementById('orange');
var pinkColor = document.getElementById('pink');
var blackColor = document.getElementById('black');
var brownColor = document.getElementById('brown');
var defaultColor = document.getElementById('defaultColor');
var mainHeading = document.getElementById('mainHeading');
purpleColor.addEventListener('click', function(){
   document.body.style.background = "purple";
   mainHeading.style.color = "purple";
});
blueColor.addEventListener('click', function(){
    document.body.style.background = "blue";
    mainHeading.style.color = "blue";
 });
 greenColor.addEventListener('click', function(){
    document.body.style.background = "green";
    mainHeading.style.color = "green"; 
 });
 redColor.addEventListener('click', function(){
    document.body.style.background = "red";
    mainHeading.style.color = "red"; 
 });
 yellowColor.addEventListener('click', function(){
    document.body.style.background = "yellow";
    mainHeading.style.color = "yellow"; 
 });
 orangeColor.addEventListener('click', function(){
    document.body.style.background = "orange";
    mainHeading.style.color = "orange"; 
 });
 pinkColor.addEventListener('click', function(){
    document.body.style.background = "pink";
    mainHeading.style.color = "pink"; 
 });
 blackColor.addEventListener('click', function(){
    document.body.style.background = "black";
    mainHeading.style.color = "black"; 
 });
 brownColor.addEventListener('click', function(){
    document.body.style.background = "brown";
    mainHeading.style.color = "brown"; 
 });
 defaultColor.addEventListener('click', function(){
   document.body.style.background = '#fff';
   mainHeading.style.color = "rgb(255, 118, 7)";
});
