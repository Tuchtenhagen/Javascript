const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(item => item.idade);
console.log(idade);

const filter = usuarios.filter(item => (item.idade > 18 && item.empresa === 'Rocketseat'));
console.log(filter);

const find = usuarios.find(item => (item.empresa === 'Google'));
console.log(find);

const idade2 = usuarios
    .map(item => ({...item, idade: item.idade * 2 }))
    .filter(item => (item.idade < 50));
console.log(idade2);