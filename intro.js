var ctr = 8;
var elements = document.getElementsByTagName('li');

var addToList = function(e){
    var list = document.getElementById('thelist');
    var x = list.appendChild( document.createElement('li') );
    x.innerHTML = 'item ' + ctr;
    ctr += 1;

    elements = document.getElementsByTagName('li');
    for (var i = 0; i < elements.length; i++) {
    	elements[i].addEventListener('click', removeElement);
    }


};

// click button to add element to list
var button = document.getElementById('b');
button.addEventListener('click', addToList );

var setHead = function(text){
    var head = document.getElementById('h');
    console.log(text);
    head.innerHTML = text;
};

var removeElement = function(e) {
    this.remove();
};

document.body.addEventListener('mouseover', function(e) {
    //console.log('hi');
    if (e.target.nodeName == 'LI'){
	//console.log(e.target.innerHTML);
	setHead(e.target.innerHTML);
    }
    else{
	setHead("Hello World!");
    }    
});

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', removeElement);
}


///*** ADDED STUFF
function fibonacci(n) {
    if (n == 0) { return 0; }
    else if ( n == 1) { return 1; }
    else {
	return fibonacci(n-1) + fibonacci(n-2);
    }
};

var ctr2 = 0;
var addToOtherList = function(e){
    var list = document.getElementById('theotherlist');
    var x = list.appendChild( document.createElement('li') );
    x.innerHTML = "Fib number: " + fibonacci(ctr2);
    ctr2 += 1;

    elements = document.getElementsByTagName('li');
    for (var i = 0; i < elements.length; i++) {
    	elements[i].addEventListener('click', removeElement);
    }
};

var b2 = document.getElementById("b2");
b2.addEventListener("click", addToOtherList);
