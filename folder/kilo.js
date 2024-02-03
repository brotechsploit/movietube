function searchFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toLowerCase();
    ul = document.getElementById("mylist");
    li = ul.getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toLowerCase().indexof(filter)>-1){
        li[i].style.display = "";
    }
    else{
        li[i].style.display = "none";
    }
}