function searchFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("input-box");
    filter = input.value.toLowerCase();
    ul = document.getElementsById("myList");
    li = ul.getElementsByTagName("li");
    for(i = 0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
    } 
    
    if(txtValue.toLowerCase().indexof(filter)>-1){
        li[i].style.display = "";
    }
    else{
        li[i].style.display = "none";
    }
}



