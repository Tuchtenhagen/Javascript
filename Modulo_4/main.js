var idadePromise = function() {
    return new Promise(function(resolve, reject) {



    });
}


function checaIdade(idade) {
    // Retornar uma promise
}
checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });