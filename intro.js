
var ctr = 8;
var addToList = function(e){
    var list = document.getElementById('thelist');
    var x = list.appendChild( document.createElement('li') );
    x.innerHTML = 'item ' + ctr;
    ctr += 1;
};

// click button to add element to list
var button = document.getElementById('b');
button.addEventListener('click', addToList );

var setHead = function(text){
    var head = document.getElementById('h');
    console.log(text);
    head.innerHTML = text;
};

document.body.addEventListener('mouseover', function(e) { console.log('hi');
    if (e.target.nodeName == 'LI'){
	console.log(e.target.innerHTML);
	setHead(e.target.innerHTML);
    }
    else{
	setHead("Hello World!");
    }    
 });
