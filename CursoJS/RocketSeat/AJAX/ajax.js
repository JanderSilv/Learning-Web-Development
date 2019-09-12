
var xhr = new XMLHttpRequest(); // Acesso ao AJAX

xhr.open('GET', 'https://api.github.com/users/JanderSilv');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Código 4 define que a requisição foi finalizada
        console.log(JSON.parse(xhr.responseText));
    }
}
