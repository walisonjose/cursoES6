/*const arr = [1 , 3, 4, 5, 6];
//


const newArr  = arr.map(item =>{
    return item * 2;
})

console.log(newArr);



////constantes

const teste = () => {
    console.log("Constante em forma de função!!!");
}

//Outro tipo

const teste = () => [1, 2, 3, 4];

//Retornando  objeto

const teste = () => ({ nome: 'Diego'});


//valores padrão
const  soma = (a= 3, b=6) => {
  return a+b;
}



//desestruturação de objetos

const usuario = {
    nome:  'Walison',
    idade: 30,
    endereco: {
        cidade: 'goiânia',
        estado: 'GO'
    },
};

const { nome, idade, endereco: { cidade} } = usuario;

console.log(nome);


function mostraNome( { nome, idade}){
  console.log(nome, idade);
}

mostraNome(usuario);



// Operadores rest& Spread..


//REST


const usuario2 = {
    nome:  'Walison',
    idade: 30,
    endereco: {
        cidade: 'goiânia',
        estado: 'GO'
    },
};

const { nome, ...resto} =  usuario2;

//console.log(nome);

//console.log(resto);

//rest em arrays

const arr = [1 , 3, 4, 5, 6];

const [ a, b, ...c] = arr;

//console.log(a);
//console.log(b);
//console.log(c);

//rest em funções

function soma(...params){
  return params.reduce((total, next) => total +next);
}
//console.log(soma(1,2,4));

//SPREAD

const arr1 = [1 , 3];
const arr2 = [ 4, 5, 6];

const arr3 = [ ...arr1, ...arr2]
console.log(arr3);

*/
const usuario3 = {
    nome:  'Walison',
    idade: 30,
    endereco: {
        cidade: 'goiânia',
        estado: 'GO'
    },
};

const usuario4 = { ...usuario3, nome:   'Byla!!'};
console.log(usuario4);


//Template Literals

console.log("Meu nome é "+usuario4.nome+" e tenho "+usuario4.nome+" anos.");

console.log(`Meu nome é ${usuario4.nome} e tenho ${usuario4.nome} anos.`);