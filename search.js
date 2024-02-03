function search(){
    var searchTerm = document.getElementById('searchInput').Value;
    fetchResultsFromServer(searchTerm);

}

function displayResults(results){
    var resultsContainer = document.getElementById('searchResults');
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
