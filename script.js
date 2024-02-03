const searchWrapper=document.querySelector(".search");
const inputBox=document.getElementById("input-box");
const resultBox = document.querySelector(".result-box");

inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showsuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i< allList.length; i++) {
            allList[i]. setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");

    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value =selectUserData;

}


function showsuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
        
    }else{
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
}
