"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var usuario3 = {
  nome: 'Walison',
  idade: 30,
  endereco: {
    cidade: 'goiânia',
    estado: 'GO'
  }
};

var usuario4 = _objectSpread({}, usuario3, {
  nome: 'Byla!!'
});

console.log(usuario4); //Template Literals

console.log("Meu nome é " + usuario4.nome + " e tenho " + usuario4.nome + " anos.");
console.log("Meu nome \xE9 ".concat(usuario4.nome, " e tenho ").concat(usuario4.nome, " anos."));
