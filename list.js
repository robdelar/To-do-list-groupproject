function newElement(){
    // get value from the input and place it in a text node variable
    var item = document.getElementById("myInput").value
    var text = document.createTextNode(item)
    // creating a new ul item
    var newItem = document.createElement("li")
    // text is added into the ul element 
    newItem.appendChild(text)
    //ul element is added to the list
    document.getElementById("myUL").appendChild(newItem)
    
  }


  var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
        }, false);


