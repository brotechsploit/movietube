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

function search(){
    var searchTerm = document.getElementById('searchbutton').Value;
    fetchResultsFromServer(searchTerm);

}

function displayResults(results){
    var resultsContainer = document.getElementById('input-box');
    resultsContainer.innerHTML = '';

    results.forEach(function(result){
        var resultElement = document.createElement('div');
        resultElement.innerHTML = '<h3>${result.title}</h3><p>${result.description}</p>';

        resultsContainer.appendChild(resultElement);
    });
}

function fetchResultsFromServer(searchTerm){
    fetch('http://http://localhost/phpmyadmin/server.php?search=${searchTerm}')
    .then(response =>response.json())
    .then(results => displayResults(results)).catch(error => console.error('Error fetching results:', error));
        
}


