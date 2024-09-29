//objetos
var aluno1 = {
    matricula: 1234856,
    nome: 'jader',
    curso: 'DS',
    ativo: true
};

var jader = {
    nome: 'Jader',
    curso: 'Desenvolvimento de Sistemas',
    idade: 17,
    ativo: true,
    rm: 211546
};
var moises = {
    nome: 'moises',
    curso: 'Desenvolvimento de Sistemas',
    idade: 17,
    ativo: false,
    rm: 230150
};

console.log(aluno1.nome);

aluno1.dataNascimento = '03/08/2007';
console.log(aluno1.dataNascimento);

delete aluno1.dataNascimento;

//undefined e null

var x;
var y = null;

//arrays

var frutas = ['banana', 'laranja', 'maçã'];
console.log(jader);
console.log(moises);