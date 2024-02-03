let availableKeywords =[
    "Where to learn coding",
    "How to create simple website",
    "How to create a login form simply",
    "Vybzkartel",
    "mama otis",
    "ongele",
    "Blaiz kush",
    "vybz kartel",
    "popcan",
    "migos",
    "quavo",
    "offset",
    "lildurk",
    "meekmill",
    "jason statham",
    "jack uwujing",
    "youtube",
    "Blogger",
];

const resultsBox =document.querySelector(".result-box");
const  inputBox = document.getElementById("input");


inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML ='';
    } 

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" +content.join('') +"</ul>";

}


function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

function searchFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(input);
    filter = input.value.toLowerCase();
    ul = document.getElementById(mylist);
    li = ul.getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toLowerCase().indexof(filter)>-1){
        li[i].style.display = "";
    }
    else{
        li[i].style.display = "none";
    }
}