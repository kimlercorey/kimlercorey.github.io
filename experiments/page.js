var page = {};
smokesignals.convert(page);

function checkArrowKeys(e){
  var arrs= [], key= window.event? event.keyCode: e.keyCode;
    arrs[37]= 'left';
    arrs[38]= 'up';
    arrs[39]= 'right';
    arrs[40]= 'down';
  if(arrs[key]) page.emit('keypress', arrs[key]);
}

document.onkeydown=checkArrowKeys;

//Logic for the listener can be added on the main page
//function listener(character) {
//  window.alert ('Key pressed is '+ character + '!');
//}

page.on('keypress', listener); 
page.on('keypress', listener2); 