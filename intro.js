
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

