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

    var myNodelist = document.getElementsByTagName("LI");

    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newItem.appendChild(span); 

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
    
  }


  var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
        }, false);


    

    // Click on a close button to hide the current list item
  


