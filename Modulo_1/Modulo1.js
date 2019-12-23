/* ------------------------------Exercício 1---------------------------- */


var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};


// console.log("O usuário mora em" + endereco.cidade + "/" + endereco.uf + ", no bairro " + endereco.bairro + ", na rua '" + endereco.rua + "' com nº " + endereco.numero + ".");

/* ------------------------------Exercício 2---------------------------- */




function pares(x, y) {

    for (contador = x; contador < y; contador++) {

        if ((contador % 2) == 0) {
            console.log(contador);
        }

    }

}

// pares(32, 321);


/* ------------------------------Exercício 3---------------------------- */





function temHabilidade(skills) {
    if (skills.indexOf("Javascript", 0) >= 0) {
        return true;
    } else {
        return false;
    }
}
var skills = ["Javascript", "ReactJS", "React Native"];


// console.log(temHabilidade(skills));


/* ------------------------------Exercício 4---------------------------- */




function experiencia(anos) {

    if (anos >= 0 && anos <= 1) {
        console.log("Iniciante");
    } else if (anos > 1 && anos <= 3) {
        console.log("Intermediário");
    } else if (anos > 3 && anos <= 6) {
        console.log("Avançado");
    } else if (anos > 6) {
        console.log("Jedi Master");
    }
}

var anosEstudo = 7;

// experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master







/* ------------------------------Exercício 5---------------------------- */



function possuiHabilidades(usuarios) {

    for (usuario of usuarios) {
        console.log("O usuário " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(', '));
    }
}



var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

possuiHabilidades(usuarios);