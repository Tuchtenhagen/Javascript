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

// import ClasseUsuario from './functions';
// import { idade } from './functions';
import Usuario, { idade as IdadeUsuario } from './functions';

Usuario.info();

console.log(IdadeUsuario);

//#endregion


//#endregion