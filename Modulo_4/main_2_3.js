var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

buttonElement.setAttribute('onclick', 'procurarUsuario()');


function procurarUsuario() {

    axios.get('https://api.github.com/users/' + inputElement.value + '/repos')
        .then(function(response) {
            renderRepositories(response.data);
        })
        .catch(function() {

        });

}




function renderRepositories(repos) {



}