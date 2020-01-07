var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var ulElement = document.querySelector('ul');

buttonElement.setAttribute('onclick', 'procurarUsuario()');


function procurarUsuario() {

    axios.get('https://api.github.com/users/diego3g/repos')
        .then(function(response) {
            renderRepositories(response.data);
        })
        .catch(function() {

        });

}




function renderRepositories(repos) {

    for (const repo of repos) {
        var li = document.createElement('li');
        li.innerHTML = repo.name;
        ulElement.appendChild(li);
    }

}