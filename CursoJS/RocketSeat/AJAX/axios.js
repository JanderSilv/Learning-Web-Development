axios.get('https://api.github.com/users/JanderSilv')
    .then(function(response) { // executado quando a promise é um sucesso
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

    // O axios resume o precesso de uma promise, retornando o JSON já em formato JavaScript