//#region AULA CLASSES

/*
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(2, 3));
*/

//#endregion



//#region  AULA OPERAÇÃO EM ARRAY
/*
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);

*/

//#endregion



//#region AULA ARROW FUNCTION

/*
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: 'Richard' });

console.log(teste());
*/
//#endregion



//#region AULA ARROW VALORES PADRÃO
/*
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());
*/
//#endregion



//#region AULA DESESTRUTURAÇÃO
/*
const usuario = {
    nome: 'Richard',
    idade: 25,
    endereco: {
        cidade: 'Pelotas',
        estado: 'RS',
    },
};

// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome, idade, cidade);
}

mostraNome(usuario);
*/

//#endregion



//#region AULA OPERADORES REST/SPREAD
/*

//REST
function soma(a, b, ...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6, 7));


//SPREAD
const usuario1 = {
    nome: 'Richard',
    idade: 25,
    empresa: 'CIGAM',
};

const usuario2 = {...usuario1, nome: 'William' };

console.log(usuario2);
*/
//#endregion




//#region AULA TEMPLATE LITERALS
/*
const nome = 'Richard';
const idade = 25;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

*/

//#endregion

//#region EXERCICIOS MODULO 2

//#region EXERCICIO 1

/*

// import ClasseUsuario from './functions';
// import { idade } from './functions';
import Usuario, { idade as IdadeUsuario } from './functions';

Usuario.info();

console.log(IdadeUsuario);
*/

//#endregion


//#endregion




//#region AULA ASYNC AWAIT

/*
const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
})

// primeiro modo de fazer
// async function executaPromise() {
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
// }

// modo com arrowfunction
const executaPromise = async() => {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
};

executaPromise();
*/
//#endregion


//#region AULA AXIOS

/*
import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.log('Erro na API');
        }

    }
}

Api.getUserInfo('Tuchtenhagen');
Api.getUserInfo('Tuchtenhagentesteerrado');

*/
//#endregion





import api from './api';


class App {

    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {

            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            console.log(response);


            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        } catch (err) {
            alert('Repositorio não existe');

            this.inputEl.value = '';
        }

        this.setLoading(false);

    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();