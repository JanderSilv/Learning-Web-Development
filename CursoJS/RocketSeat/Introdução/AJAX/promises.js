/* São funções que não vao influenciar na linha do tempo do código
* Retornam um valor de sucesso ou erro. Não precisamos nos preocupar quando ele trará a informação
*/

var myPromise = function() {
    return new Promise(function(resolve, reject) { 
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/JanderSilv');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) { // Código 200 define o sucesso da requisição;
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

myPromise()
    .then(function(response) { // executado quando a promise é um sucesso
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    }); // executado quando a promise da erro

// new: porque é uma class
// resolve e reject são funções