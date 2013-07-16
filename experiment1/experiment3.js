
 // initialize the canvas 
 // var canvas = $("#canvas")[0].getContext('2d');

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

 window.addEventListener('resize', resizeCanvas, false);
  
resizeCanvas();






var page = {};
smokesignals.convert(page);

function checkArrowKeys(e){
  var arrs= [], key= window.event? event.keyCode: e.keyCode;
    arrs[32]= 'space';
    arrs[37]= 'left';
    arrs[38]= 'up';
    arrs[39]= 'right';
    arrs[40]= 'down';
  if(arrs[key]) page.emit('keypress', arrs[key]);
}

document.onkeydown=checkArrowKeys;

//Logic for the listener can be added on the main page
//function listener(character) {
//  console.log ('Key pressed is '+ character + '!');
//}

 
page.on('keypress', listener); 

