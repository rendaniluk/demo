//The DOM - document objec model
var radBtn = document.querySelector('.radioBtn');
var greetBtn = document.querySelector('.theButton');
var reset = document.querySelector('.reset');
var nextPerson= document.querySelector('.next');
var myList = document.querySelector('.myList');
var theName = document.querySelector('.theName')
var counter=document.querySelector('#counter')

var count = 0;
//function for clickMe
function clickMe(){
var x = theName.value;
var selectedRadBtn = document.querySelector("input[name='lang']:checked");
    var li = selectedRadBtn.value + ',' + ' ' + x.substr(0,1).toUpperCase() + x.substr(1).toLowerCase();
  if (theName.value.length > 0) {
          myList.innerHTML=li;
        };
        /*if(theName.value.length > 0){
          count++;
          counter.innerHTML=count;
      }*/
};

//adding eventlisteners to greetBtn and reset
greetBtn.addEventListener('click', clickMe);
//greet next person eventlisteners
nextPerson.addEventListener('click', function() {
    theName.value='';
    myList.innerHTML = '';
});
//reset counter eventlisteners
//reset.addEventListener('click', function(){
  //});
